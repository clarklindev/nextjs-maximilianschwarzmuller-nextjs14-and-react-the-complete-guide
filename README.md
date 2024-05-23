# nextjs-maximilianschwarzmuller-nextjs14-and-react-the-complete-guide
https://www.udemy.com/course/nextjs-react-the-complete-guide/

- NOTE: this is the 2024 next14 update

## Section 01 - getting started (22min)

### 02 What is nextjs?
- framework ontop of reactjs
- FEATURE: nextjs has route setup and handling
- FEATURE: nextjs has form handling
- FEATURE: nextjs has data fetching
- FEATURE: nextjs has authentication

### 03 Key features
- allows fullstack (front + backend)
- file based routing
- server side rendering (nextjs pre-renders on server)

### 04 creating a first nextjs app

- download src: https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/01-getting-started/starting-project.zip
- install with pnpm (same as npm but shares node package libraries globally for all codebases)

```powershell
//install pnpm on windows -> powershell (admin)
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

or create a new project
- asks questions from cli:
1. typescript? no (course)
2. eslint? yes
3. tailwindcss? no
4. src/ directory? no (course)
5. app router? yes (course)
6. import alias? no (course)

```cmd
npx create-next-app@latest
```

#### run project

- see package.json commands
```
pnpm run dev
```

### 05 nextjs vs just react - analyzing the nextjs project
- nextjs -> html page content is rendered on server and sent from server to client
- vanilla react -> single html file with client side js code -> generated and rendered client side

### 06 routing -> editing the starting-project
- nextjs uses the "app" folder for routing

#### creating a route
- APP Router -> nextjs uses app/ folder 
- CONVENTION: routing is done by creating folders inside app/ AND "page.js"
- inside app/ add a new folder "awesome" (this will be the route) AND new pages are created by naming them "page.js"
- the above can be accessed

```
http://localhost:3000/awesome
```

- page should return jsx of what to render
- need default exports
- When you use export default, it allows Next.js to import the component without specifying the exact name of the import. default exports make it easier for Next.js to work with file-based routing and generate routes automatically.

### 07 page router vs app router (one framework, two approaches)
- page router (older)
- app router (course) -> introduced nextjs 13 -> supports react server components and server actions

---

## Section 02 - OPTIONAL - React refresher (7hrs 41min)
