import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const dbPath = "data/meals.db";
const db = sql(dbPath);

export function getMeals() {
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

  //local storage
  //storing the image on the local file system

  // 1.
  // const stream = fs.createWriteStream(`public/images/foodies/${fileName}`);

  // 2.
  // const bufferedImage = await meal.image.arrayBuffer();

  // 3.
  // use stream to write the file -> convert the arrayBuffer to regular Buffer
  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("save failed");
  //   }
  // });

  //aws s3 cloud
  const bufferedImage = await meal.image.arrayBuffer();
  const folder = "images/foodies/";

  await s3.putObject({
    Bucket: "clarklindev-nextjs-react-the-complete-guide-03-3-foodies",
    Key: folder + fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  //4.
  meal.image = `/${folder}${fileName}`;

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
