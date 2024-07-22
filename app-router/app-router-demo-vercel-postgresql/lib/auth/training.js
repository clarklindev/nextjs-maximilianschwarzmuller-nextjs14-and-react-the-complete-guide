import {getDb} from "@/lib/auth/db";
const db = getDb();

export function getTrainings() {
  const stmt = db.prepare("SELECT * FROM trainings");
  return stmt.all();
}
