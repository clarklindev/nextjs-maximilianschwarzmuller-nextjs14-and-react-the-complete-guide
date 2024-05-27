import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals(){
  //simulate delay
  //await new Promise((resolve)=> setTimeout(resolve, 2000));
  
  //simulate load error
  // throw new Error('loading meals failed');

  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
  // return db.prepare('SELECT * FROM meals WHERE slug = ' + slug);  //insecure
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);  //secure
}

export function saveMeal(meal){
  //create slug 
  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);

}
