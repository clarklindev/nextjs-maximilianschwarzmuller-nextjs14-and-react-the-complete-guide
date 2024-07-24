import { Lucia } from "lucia";
import { NeonHTTPAdapter } from "@lucia-auth/adapter-postgresql";
import { neon } from "@neondatabase/serverless";
import { cookies } from "next/headers";

const sql = neon();
const adapter = new NeonHTTPAdapter(sql, {
  user: "auth_users",
	session: "user_sessions"
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

//create session and session cookie

export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {});
  const sessionCookieData = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookieData.name,
    sessionCookieData.value,
    sessionCookieData.attributes
  );
}

export async function verifyAuth() {
  const sessionCookie = cookies().get(lucia.sessionCookieName);

  //if there is no session cookie
  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    };
  }

  //assign cookie to sessionId
  const sessionId = sessionCookie.value;
  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  //validate session id
  const result = await lucia.validateSession(sessionId);

  //refresh cookie -> session cookie and still valid
  try {
    if (result.session && result.session.fresh) {
      const sessionCookieData = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookieData.name,
        sessionCookieData.value,
        sessionCookieData.attributes
      );
    }

    //invalid session
    if (!result.session) {
      const sessionCookieData = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookieData.name,
        sessionCookieData.value,
        sessionCookieData.attributes
      );
    }
  } catch {}

  return result;
}

export async function destroySession() {
  const { session } = await verifyAuth();

  if (!session) {
    return {
      error: "unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookieData = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookieData.name,
    sessionCookieData.value,
    sessionCookieData.attributes
  );
}
