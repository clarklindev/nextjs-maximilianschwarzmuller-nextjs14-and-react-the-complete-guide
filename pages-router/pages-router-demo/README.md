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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## install create-next-app execution policy

- when you try install:

```
npx create-next-app@latest .
```

and you get an error:
`npx : File C:\Program Files\nodejs\npx.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies`

### FIX:

- Change PowerShell Execution Policy (Recommended)
- Open PowerShell as Administrator: Right-click on the PowerShell icon and choose "Run as administrator".

1. check execution policy: `Get-ExecutionPolicy -List`
2. allow remote: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. install: `npx create-next-app@latest .`
4. change back: `Set-ExecutionPolicy Undefined -Scope CurrentUser`

## Project setup

- this project is the pages-router demo
- when running:

```cmd
pnpm create next-app@latest .

What is your project named? .
Would you like to use TypeScript? No
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? No
Would you like to use `src/` directory? No
Would you like to use App Router? (recommended) No
Would you like to customize the default import alias (@/_)? No
What import alias would you like configured? @/_
```

## project contents - description

- this project is meant to combine all the previous pages-router modules into a single repository

### pages router

- 11 - pages router (file based routing)
- folder: 11-pages-router-pages-and-file-based-routing
- basic routing
- dynamic routes `[id]`
- dynamic routing with catch all route `[...slug]`
- `import {useRouter} from 'next/router';`
- `const router = useRouter();`
- router.pathname
- router.query
- router.replace('/clients/max/projecta');

```js
import Link from "next/link";
// Link example
<Link
  href={{
    pathname: "/clients/[id]",
    query: {
      id, //id:id (client's id)
    },
  }}
>
  {name}
</Link>;
```

- `_app.js`
- `404.js`
- cssmodules

- folder: 12-pages-router-project

- events -> browser and see events in detail
- 12-pages-router-project merged into this project
- at this point: `components/layout/layout.js` imports `components/layout/main-header.js` and this is on all pages
- TODO: use this layout only for the events pages
- you can define the getLayout function to select the layout based on the current page

```js
//pages/_app.js
import Layout from "../components/layout/layout";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  // Determine which layout to use based on the page or default <Layout>
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

export default App;
```

- If a page component (Component) defines a getLayout static method, it will use that layout.
  Otherwise, it defaults to MainLayout.

```js
//pages/events/index.js
//...
import EventLayout from "@/components/layout/layout-event";

//...
function AllEventsPage() {
  //...
}
AllEventsPage.getLayout = (page) => <EventLayout>{page}</EventLayout>;

export default AllEventsPage;
```

### page prerendering and data-fetching

- 13-page-prerendering-and-data-fetching
- getStaticProps() reads with path and fs to return props to the ProductsPage
- import fs from "fs/promises";
- import path from "path";
- uses local database from `data/dummy-backend.json` to return `products` as a prop to the component
- for each product a Link is component is rendered which links to dynamic page
- `<Link href={`/products/${product.id}`}>{product.title}</Link>`

- 14-page-prerendering-and-data-fetching-project
- project `next events` -> listing and browsing event details
- the point of this is data fetching using nextjs -> instead of dummy data -> data fetch from firebase
- firebase backend has `events` table

### optimizing nextjs

- merging 15-optiziming-nextjs into project
- continuation of project from Events project in section folder: `14-page-prerendering-and-data-fetching-project`
- page optimizations -> meta + head tags
- reusing components ,logic, configurations
- optimizing images -> using next/image `<Image>` component
- most changes are updates and optimizations
- apparently `_document.js` needs to be class-based syntax
- `pages/events/[eventId].js` changes from useRouter() to get detail page info to getStaticProps() prefetch data

### api routes (fullstack backend)

- feedback form
- api routes to handle form data
- `http://localhost:3000/feedback`
- uses file system
- `import fs from 'fs';`
- `import path from 'path';`
- stores form data in .json file

### app-wide state (react context)

### building a blog

### deploying nextjs

### authentication
