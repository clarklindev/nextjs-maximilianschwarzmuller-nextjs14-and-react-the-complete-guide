import { NextResponse } from "next/server";

import { createTables} from "@/lib/auth/db";

export async function GET(request) {

  try {
    await createTables();

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
