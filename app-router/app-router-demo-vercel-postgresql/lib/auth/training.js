import db from "./initdb";

export function getTrainings() {
  const stmt = db.prepare("SELECT * FROM trainings");
  return stmt.all();
}
