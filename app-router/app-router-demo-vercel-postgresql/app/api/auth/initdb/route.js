import { NextResponse } from "next/server";

import {getDb} from '@/lib/auth/db';

export async function POST(request) {

  try {
    getDb();
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
