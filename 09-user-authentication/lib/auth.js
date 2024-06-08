import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import {cookies} from 'next/headers';

import db from './db';
const adapter = new BetterSqlite3Adapter(db, 
{
  user: 'users',
  session: 'sessions'
});

//SQLite adapter 
const lucia = new Lucia(adapter, {

  sessionCookie: {
    expires: false, 
    attributes: {
      secure: process.env.NODE_ENV === 'production'
    }
  }

}); 

//create session and session cookie

export async function createAuthSession(userId){
  const session = await lucia.createSession(userId, {});
  const sessionCookieData = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookieData.name, sessionCookieData.value, sessionCookieData.attributes);
}


export async