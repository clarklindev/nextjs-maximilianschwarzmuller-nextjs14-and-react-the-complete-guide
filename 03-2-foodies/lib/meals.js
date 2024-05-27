import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(){
  //simulate delay
  //await new Promise((resolve)=> setTimeout(resolve, 2000));
  
  //simulate load error
  // throw new Error('loading meals failed');

  return db.prepare('SELECT * FROM meals').all();
}