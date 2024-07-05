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
