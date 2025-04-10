import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  //simulate delay
  //await new Promise((resolve)=> setTimeout(resolve, 2000));

  //simulate load error
  // throw new Error('loading meals failed');

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // return db.prepare('SELECT * FROM meals WHERE slug = ' + slug);  //insecure
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); //secure
}

export async function saveMeal(meal) {
  //create slug
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  //1.
  const stream = fs.createWriteStream(`public/images/foodies/${fileName}`);

  //2.
  const bufferedImage = await meal.image.arrayBuffer();

  //3.
  //use stream to write the file -> convert the arrayBuffer to regular Buffer
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("save failed");
    }
  });

  //4.
  meal.image = `${fileName}`;

  //5.
  db.prepare(
    `
      INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
  ).run(meal);
}
