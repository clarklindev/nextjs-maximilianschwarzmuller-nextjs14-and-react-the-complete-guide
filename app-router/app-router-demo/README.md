This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project setup

- `app-router-demo/`
- this project is the pages-router demo
- when running:

```cmd
pnpm create next-app@latest .

What is your project named? .
Would you like to use TypeScript? No
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? No
Would you like to use `src/` directory? No
Would you like to use App Router? (recommended) YES
Would you like to customize the default import alias (@/_)? No
What import alias would you like configured? @/_
```

- combined demo -> `app-router/app-router-demo/`
-

## mergin 01-getting-started

- this module introduces file based routing using app-router

### app-router

- routes happen inside `app/` folder
- use folders to create route segments
- route pages are named `pages.js`
- use `layout.js` for layouts

## 02-react-refresher

- only README.md for this module

## 03-1-nextjs-essentials-app-router

- reserved filenames:

```
  page.js -> define page content
  layout.js -> wrap around pages
  not-found.js -> not-found fallback page
  error.js -> error fallback page
  loading.js -> Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
  route.js -> Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)
```

- introduction to `import Link from 'next/link';` Links
- dynmaic routes: `blog/[slug]/page.js`
- layout.js metadata:

```js
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};
```

## 03-2-foodies

- project -> `initdb.js` initializes a `meals.db` database in project root folder.
- NOTE: in initdb.js you are creating a db and populating it with dummyMeals.
- NOTE: each meal has an image, the path is relative to `public/` (but as if it were on root folder)
- to initialize: `pnpm run initdb` command (which is in package.json)
- `lib/meals.js` is the actual db interfacing file.
- uses fs (file system) db stored locally
- `better-sqlite3` to write to sql database
- `import slugify from "slugify";` to create a slug from a string
- `import xss from "xss";` using xss to prevent xss attacks
- note when you are saving a meal -> `createWriteStream()` path includes `public` and the upload image should be stored in the same place as where dummy images are kept `public/images/food/${fileName}`
- after share submit, user is redirected (lib/action.js) `redirect("/foodies/meals");`
- note: the path has been adjusted to cater for this demo (combined modules)

## 03-3-foodies-image-storage-using-aws-s3

- uses aws to store images -> `lib/meals.js`
- so the db still uses sql to store data and paths but the physical image is stored in aws s3 bucket the path is what is stored in db.
- aws dependency `@aws-sdk/client-s3`
