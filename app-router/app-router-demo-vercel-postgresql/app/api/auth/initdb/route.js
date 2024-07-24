import { NextResponse } from "next/server";

import { initializeDb} from "@/lib/auth/db";

export async function GET(request) {

  try {
    await initializeDb();

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
