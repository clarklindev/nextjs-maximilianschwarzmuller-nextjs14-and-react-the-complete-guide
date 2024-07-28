import { getDb } from "./db";

export function getTrainings() {
  const db = getDb();
  
  const stmt = db.prepare("SELECT * FROM trainings");
  
  return stmt.all();
}
