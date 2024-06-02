- course: nextjs-maximilianschwarzmuller-nextjs14-and-react-the-complete-guide

  - https://www.udemy.com/course/nextjs-react-the-complete-guide/
  - https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources

- NOTE: this is the 2024 next14 update

## Table of contents

[Section 01 - getting started](#section-01---getting-started-22min)

[Section 02 - OPTIONAL - React refresher](#section-02---optional---react-refresher)

[Section 03 - NextJS essentials - App Router](#section-03---nextjs-essentials---app-router)

[Section 04 - Routing and Page Rendering - Deep Dive](#section-04---routing-and-page-rendering---deep-dive)

[Section 05 - Data Fetching - Deep Dive](#section-05---data-fetching---deep-dive)

[Section 06 - Mutating Data - Deep Dive](#section-06---mutating-data---deep-dive)

[Section 07 - Understanding & Configuring caching](#section-07---understanding--configuring-caching)

[Section 08 - NextJs app optimizations](#section-08---nextjs-app-optimizations)

[Section 09 - user authentication](#section-09---user-authentication)

[Section 10 - round up and next steps](#section-10---round-up-and-next-steps)

[Section 11 - Pages & File-based routing](#section-11---pages--file-based-routing)

[Section 12 - Project Time: working with file-based routing](#section-12---project-time-working-with-file-based-routing)

[Section 13 - page pre-rendering and data-fetching](#section-13---page-pre-rendering-and-data-fetching)

[Section 14 - project time: page pre-rendering & data-fetching](#section-14---project-time-page-pre-rendering--data-fetching)

[Section 15 - optimizing Next.js apps](#section-15---optimizing-nextjs-apps)

//FULL STACK REACT

[Section 16 - adding backend code with API Routes (fullstack react)](#section-16---adding-backend-code-with-api-routes-fullstack-react)

[Section 17 - Project time: API Routes](#section-17---project-time-api-routes)

[Section 18 - App-wide state (react context)](#section-18---app-wide-state-react-context)

[Section 19 - complete app example (build a full blog A-Z)](#section-19---complete-app-example-build-a-full-blog-a-z)

[Section 20 - Deploying Nextjs apps](#section-20---deploying-nextjs-apps)

[Section 21 - Adding Authentication](#section-21---adding-authentication)

[Section 22 - Optional Nextjs Summary](#section-22---optional-nextjs-summary)

[Section 23 - Course Roundup](#section-23---course-roundup) 

---

# Section 01 - getting started (22min)
[back (table of contents)](#table-of-contents)

## 02 What is nextjs?

- framework ontop of reactjs
- FEATURE: nextjs has route setup and handling
- FEATURE: nextjs has form handling
- FEATURE: nextjs has data fetching
- FEATURE: nextjs has authentication

## 03 Key features

- allows fullstack (front + backend)
- file based routing
- server side rendering (nextjs pre-renders on server)

## 04 creating a first nextjs app

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

### run project

- see package.json commands

```
pnpm run dev
```

## 05 nextjs vs just react - analyzing the nextjs project

- nextjs -> html page content is rendered on server and sent from server to client
- vanilla react -> single html file with client side js code -> generated and rendered client side

## 06 routing -> editing the starting-project

- nextjs uses the "app" folder for routing

### creating a route

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

## 07 page router vs app router (one framework, two approaches)

- page router (older)
- app router (course) -> introduced nextjs 13 -> supports react server components and server actions

## 10. course setup
- (2024-05) max adds a lesson 10 to section 1 to use Jetbrains IDE (thats what the whole lesson is about) 
- which throws out the numbering for the rest of the course by 1. 
- its quite annoying because it doesnt actually add any benefit to the rest of the lessons BUT it does affect lesson order.
- so all lessons up to Section 04 - Routing and Page Rendering - Deep Dive are renumbered (adjustment of +1) 
- see affected lessons in git commit history

---

# Section 02 - OPTIONAL - React refresher 
[back (table of contents)](#table-of-contents)

- 7hrs 41min - lesson 10-89 (lesson 47+ is legacy lessons)
- NOTE TO SELF: DO NOT REDO THESE LESSONS AGAIN -> YOU KNOW IT!!

- source code snapshot -> https://github.com/academind/react-complete-guide-course-resources/tree/main/code/30%20React%20Summary
- for convenience section files: 02-react-refresher/

- react refresher -> going over the basics
- imperative approach -> manipulating dom (step by step)
- declarative approach -> write ui code and blend with js, event listeners, state, and dynamic values
- vite install (install in current folder vite react template):

```cmd
pnpm create vite . --template react
```

## 22. CSS Modules

```css
/* Post.module.css */
.post {
  font-size: 1.5rem;
}
```

- css modules -> filename Post.module.css / import classes from "./Post.module.css"
- access the css: classes used in css can be accessed as properties of imported object ("classes")
  `<div className={classes.post}></div>`

## 26. state

- react components only refresh/reload with state updates eg. const [state, update state function] = useState() hooks
- react components DO NOT UPDATE without state updates
- OPTIMIZATION: when working with state and it depends on previous state, pass to the useState() set function a function that receives previous state (you can name this anything)

```js
function PostList() {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]); //optimized way by passing function that receives prev state
  }

  return <>//...</>;
}
```

## 31. react form buttons / 32. handling submit

- by default clicking button submits form
- give button type=""button" so it doesnt trigger form submit or give type="submit" to submit (optional as it will by default submit)
- form should have onSubmit handler that passes event and calls event.preventDefault();

```js
function NewPost({onAddPost, onCancel}){

  const [enteredBody, setEnteredBody] = useState();

  function submitHandler(event){
    event.preventDefault();

    const postData = {
      body: enteredBody
    }
    onAddPost(postData);

    //close modal
    onCancel()
  }

  function bodyChangeHandler(e){
    setEnteredBody(e.target.value);
  }

  return {
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="bodyText">Text</label>
        <textarea onChange={bodyChangeHandler}/>
      </p>

      <button type="button">cancel</button>
      <button>submit</button>
    </form>
  }
}
```

## 36. sending a POST HTTP Request

- frontend to backend communication
- use fetch(url, {}) to send and get data
- fetch is not react only feature, it is in all browsers
- second param is a config object.. the body attribute is js that needs to be converted -> JSON.stringify()
- fetch awaits response

```js
function addPostHandler(postData) {
  //submit form
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData), //convert to json
    headers: {
      "Content-Type": "application/json",
    },
  });

  setPosts((existingPosts) => [postData, ...existingPosts]); //optimized way by passing function that receives prev state
}
```

## 37. Handling Side effects with useEffect()

- frontend sends a fetch request to /posts on backend which when done returns "posts"

### backend

```js
app.get("/posts", async (req, res) => {
  const storedPosts = await getStoredPosts();
  res.json({ posts: storedPosts });
});
```

- handle feedback from fetch

### frontend ANTIPATTERN... DO NOT DO THIS ON FRONTEND

- ANTIPATTERN -> .then() handling causes infinite loop because updating the state eg. calling setPosts() in the then() causes component to re-render -> which causes fetch to be called again

### UseEffect() -> frontend FIX for handling fetch() request

- FIX: handling should be done with useEffect() as it prevents infinite loop
- when is useEffect() called depends on the array (second prop)
  - always called -> no second prop
  - called at start -> empty array
  - called when dependency changes -> put dependencies in the array...when anything inside array changes, the useEffect is called.
- to call an async function inside the useEffect, define a nested inner async function
- useEffect() should not be async

```js
function PostList() {
  // fetch().then(response=> response.json()).then(data=> {setPosts(data.posts)});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("");
      const resData = await response.json();
      setPosts(resData.posts);
    }
    fetchPosts();
  }, [posts]);
}
```

## 39. routing

- react allows you to use your own routing.
- have a look at https://github.com/clarklindev/react-router-6 the code is self explanatory
- react router 6
- routing happens on client side

## 41. layout routes and outlet

- you can make layout routes by adding `<Route>` children to a `<Route>`
- organize routing into its own folder
- you tell react where to render the content of the route in the layout via the `<Outlet/>` from react-router-dom
- Outlet jsx element is a placeholder for where nested route can render their content in the RootLayout

### install latest react router

```cmd
pnpm i react-router-dom
```

```js
//routes/RootLayout.jsx
import {Outlet} from 'react-router-dom';
import MainHeader from '../components/MainHeader';

function RootLayout(){
  return (<>
    <MainHeader/>
    <Outlet/>
  <>);
}

export default RootLayout;

```

- import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
- RouterProvider takes a "router" prop which you provide an route configuration object
- use createBrowserRouter to create a route config object
- then pass it as a value to RouterProvider's router prop

### METHOD A (array) -> createBrowserRouter([]) array method

- createBrowserRouter() takes an array as an value (a list of route definitions)
- a route definition is an object with a path and element that should be rendered when route is active `{path:"/", element:<App/> }`
- can add more routes to array and use layout route with children prop (array)

```js
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Posts from './Posts';
import RootLayout from './routes/RootLayout';

//METHOD 1 - normal withoutlayout
const route = createBrowserRouter([
  {path:"/", element:<Posts/> }
]);

//METHOD 2 - can add more routes to array and use layout route
const route = createBrowserRouter([
  {path:"/", element:<RootLayout/>},
  children:[ {path:"/", element:<Posts/>}, {path:"/create-post", element:<NewPost/>} ],
]);

//...
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}/>
)
```

### METHOD B (JSX) -> createBrowserRouter(createRoutesFromElements()) method

- OR you can pass to createBrowserRouter createRoutesFromElements(): `createBrowserRouter(createRoutesFromElements(<Route path='about' element={<About />} />))` and nest jsx of Route elements

```js
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Posts from "./Posts";

const route = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Posts />} />)
); //can add more <Route> components as children of <Route></Route>

//...
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
```

## 43 linking and navigation

### Link element

- in react, use Link component: `import {Link} from 'react-router-dom';`
- the right element for creating a link: `<a/>` that navigates a url BUT it creates a new request
- Link renders an `<a/>` element but it prevents the browser default of sending a request
- Link has "to" prop instead of "href"
- whereas `<button>` is more for when action occurs within page

```js
//causes new request to be sent to server
<a href="/create-post">new post</a>;

//does not send new request to server
import { Link } from "react-router-dom";
<Link to="/create-post">new post</Link>;
```

### navigation with code (navigate programatically)

- navigating using code
- useNavigate hook: import {useNavigate} from 'react-router-dom';
- can use .. to navigate to parent route

```js
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function closeHandler() {
  navigate("/");
  navigate(".."); //navigate up one level
}
```

## react-router 6.4: to handle data-fetching and submitting form data

## 44. loader

- instead of using useEffect(), go to route definition... to the route that needs loader for data...
- add loader property, value is a function that will execute whenever the route gets activated (ie. when its about to render the route element)
- convention is to go to the route's component file and add export an extra function: loader
- and instead of putting code in route definition (just import and call it)
- loader() executes client side
- it can/or not return a promise, it will await for data to load first before rendering the route component
- loader should return data that is needed for active route
- then in main route definition file, import the loader: import Posts, {loader} from './Posts';
- give loader an alias if there is more loaders from different routes: postsLoader

### consuming loader() data with useLoaderData hook

- import {useLoaderData} from 'react-router-dom'
- to consume the loader() data for the route component (or any nested component), use the useLoaderData hook
- here PostsList is nested in Posts but we will consume the loader data there...

```js
// Posts.jsx
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}
export default Posts;

export async function loader() {
  const response = await fetch("");
  const resData = await response.json();
  return resData;
}
```

- PostsList gets access to loader() data via useLoaderData hook
- removes the need for useEffect inside PostsList

```js
//PostsList.jsx
import { useLoaderData } from "react-router-dom";
function PostsList() {
  //BELOW COMMENTED OUT -> DEPRECATED for useLoaderData()
  // const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //   async function fetchPosts(){
  //     const response = await fetch('');
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //   }
  //   fetchPosts();

  // }, [posts]);

  const posts = useLoaderData();
}
```

```js
//main.jsx
import Posts, {loader as postsLoader} from './Posts';

const route = createBrowserRouter([
  {path:"/", element:<RootLayout/>},
  children:[
    {
      path:"/",
      element:<Posts/>,
      // loader: ()=>{},
      loader: postsLoader,
      children:[
        {
          path:"/create-post",
          element:<NewPost/>,
          // action:()=>{}
        }
      ]
    },
  ],
]);
```

## 45. action() functions for handling form submits

- when you have a form on a page, you can handle the submits with action() handlers, you also put the function close into the route component code
- it is triggered when form is submitted
- move the submit request code from submitHandler() to action() handler
- to handle forms with react-router, add "name" attribute to form elements
- by default `<form>` will try submit form data to server BUT...
- to use React router to handle form, use `<Form method="post">` (note Form with capital F) component: import {Form} from 'react-router-dom';
- `<Form method="post">` component will cause react router to call the action() assigned to the route component containing the form
- action(data) receives data argument which can be destructed, data is just a object..has eg. request property containing the "request" object generated by react-router
- the request object has a formData() method which gives access to the data encoded in the form
- formData() yields a promise, so change to use async/await
- to get data from formData -> const postData = Object.fromEntries(formData); //{body:'...', author:'...'}

```js
export async function action({ request }) {
  const formData = await request.formData();
  // formData.get('body') get form data
  const postData = Object.fromEntries(formData); //{body:'...', author:'...'}
  //...
}
```

- react router dom provides redirect() for what happens after form is sent
- redirect() generates a response object, which is then returned by action() function and react-router will check if its a redirect, and if it is, it will go to that route

```js
//NewPost.jsx
import { Form, redirect } from "react-router-dom";

function NewPost() {
  return (
    <>
      <Form method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" />
        </p>
      </Form>
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  // formData.get('body') get form data
  const postData = Object.fromEntries(formData); //{body:'...', author:'...'}

  //request object
  const response = fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData), //convert to json
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/"); //return a response object from action
}
```

```js
//main.jsx
import NewPost, {action as newPostAction} from './routes/NewPost';

const route = createBrowserRouter([
  {path:"/", element:<RootLayout/>},
  children:[
    {
      path:"/",
      element:<Posts/>,
      // loader: ()=>{},
      loader: postsLoader,
      children:[
        {
          path:"/create-post",
          element:<NewPost/>,
          // action:()=>{}
          action: newPostAction
        }
      ]
    },
  ],
]);
```

## 46. Dynamic Routes with react-router

- use syntax: `{path:':id'}` in the router config
- note: absolute path has '/' eg. `{path:'/:id'}`
- note: relative path is eg. `{path:':id'}`
- to get the dynamic route id from the router config object, loader() function also receives an object with 'params' attribute which you can destruct to access the dynamic id
- the attribute name is the same as what is defined in the router config object eg. if route object is {path:':id'} then you access params.id

```js
export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.posts;
}
```

---

# Section 03 - NextJS essentials - App Router
[back (table of contents)](#table-of-contents)

- lessons 86 -> 134
- 49 lessons
- 4hrs 1min
- module summary: https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/41159816

## NEXT.JS CORE ESSENTIALS

- routing, pages, components
- fetching and sending data
- styling, images, metadata

## 87. starting setup

- project folder-> 03-nextjs-essentials-app-router/

## 88. file based routing + react server components

- app/ folder where you setup pages of website
- page.js reserved filename -> Nextjs ensures its rendered on server (server component)

## 89. Adding another route via the file system

- Important: These filenames are only reserved when creating them inside of the app/

- reserved filenames (1min42sec)

  - page.js -> define page content
  - layout.js -> wrap around pages
  - not-found.js -> not-found fallback page
  - error.js -> error fallback page
  - loading.js -> Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
  - route.js -> Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

- routes are created by adding folders to app/ (with name as anything you want for the route) AND ALSO NEED a page.js
- eg. app/about/page.js
- page.js is just a default exported function
- then you can access the url via http://localhost:3000/about

```js
//AboutPage.jsx
export default function AboutPage() {
  return (
    <main>
      <h1>about us</h1>
    </main>
  );
}
```

## 90. Navigating between pages

### WRONG WAY

- using `<a>` elements causes page reload instead of single page app (SPA) environment where click just updates page with client javascript.

```js
<a></a>
```

### CORRECT WAY

- use `<Link>`
- NOTE: import Link from 'next/link';
- NOTE: NOT import {Link} from 'next/link';
- import Link from 'next/link';
- difference between react-router which uses "to" -> nextjs Link still uses "href" prop

## 91. working with pages and layouts

- a layout defines the "shell" around one or more pages
- its the layout of how the page should be rendered
- every project needs atleast one root layout: app/layout.js
- you can have other layouts inside app/route folders
- layout includes `<html>` and `<body>`
- layout DOES NOT have a `<head>` `but includes and an exported metadata object which includes all content that goes into head.
- children is the content of the page

```js
//app/layout.js
import "./globals.css";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## 92. reserved file names, custom components, & how to organize a nextjs project

- Important: These filenames are only reserved when creating them inside of the app/
- https://nextjs.org/docs/app/api-reference/file-conventions

### import css

```js
import "./global.css";
```

### Favicon

- if you add an image called "icon" to app/ it will use it as an favicon

### components

- convention is to create a components/ folder parrallel to app/
- https://nextjs.org/docs/app/building-your-application/routing/colocation

### import alias

- in nextjs you can target root in your imports to make absolute path
- eg. import @/components/header
- this is configured in jsconfig.json

```js
//jsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 95. Dynamic Routes -> configuring dynamic routes, using route parameters

- test links: http://localhost:3000/blog and http://localhost:3000/blog/post-1
- nextjs uses square brackets to denote something is dynamic: `[name]` where name is any placeholder
- so it will look like `app/blog/page.js` and `app/blog/[slug]/page.js`
- Nextjs passes a props to page components, and you can destruct this prop to retrieve "params".
- params is an object where every placeholder in a dynamic route ([slug]) will be a key, and the value stored is the actual URL value.
- eg.
  - if dir structure is `app/blog/[slug]/page.js`
  - url to access the page is: `localhost:3000/blog/page-1`
  - params.slug value is "page-1"

### Potential Blockers

- NOTE CORRECT: `import Link from 'next/link';` //no curly braces {} around Link
- NOTE INCORRECT: `import {Link} from 'next/link'`;
- not in correct folder

```js
//app/blog/page.js
import { Link } from "next/link";

export default function BlogPage() {
  return (
    <main>
      <Link href="/blog/post-1">post1</Link>
      <Link href="/blog/post-2">post2</Link>
    </main>
  );
}
```

```js
//app/blog/[slug]/page.js
export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>blog post</h1>
    </main>
  );
}
```

## 95. Onwards to the Main Project: The Foodies App

- exercise source: [github](https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources/blob/main/attachments/02-nextjs-essentials/foodies-starting-project.zip)
- /03-2-foodies
- note: `meals/share` route has precedence over the dynamic route `/meals/[slug]` even though they both have /meals parent folder

## 96. EXERCISE / 97. EXERCISE SOLUTION

- practice creating of routes / dynamic routes
- run node project at: /03-2-foodies
- exercise todo:

1. create /meals route

- http://localhost:3000/meals

2. create /meals/share route

- http://localhost:3000/meals/share

3. create /community route

- http://localhost:3000/community

4. create a dynamic route

- /meals/[slug]
- dynamic url eg. http://localhost:3000/meals/pasta

## 98. layouts

- layouts wrap other pages
- access the wrapped content via props' children attribute

```js
export default function ExampleLayout({children}){
  return <>
    {children}
  <>
}

```

## 99. adding a custom component

- here we create our own header component with react

### Images

- if you import an image into a file, react auto creates the path
- NextJS you have to access the imported file via .src
- remember when importing if you use the alias @ in the import path (jsconfig.json) it is absolute path from root folder eg. @/assets/logo.png
- NOTE: `<img>` element is standard html here... we will later use NextJs `<Image>` component see lesson 100

```js
//app/components/main-header.js

import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="food" />
        Food logo
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Food Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
```

```js
import MainHeader from '@components/main-header';

//app/layout.js
export default function ExampleLayout({children}){
  return <>
    <MainHeader/>
    {children}
  <>
}

```

## 100. Styling Nextjs

- options: tailwind or cssmodules
- see lesson ## 21. CSS Modules
- if you name your css .module.css (classes are scoped),
- every class in the css file will be accessible via the import object as a property

```css
/* components/main-header.module.css */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
}
```

```js
import classes from "./main-header.module.css";

export default function Test() {
  return (
    <>
      <div className={classes.header}>Hi</div>
    </>
  );
}
```

### 101. Optimizing Images with Nextjs <Image> component

- https://nextjs.org/docs/app/api-reference/components/image
- Nextjs has an Image component which assists with optimizing images
- optimizations: eg. auto lazy loading under-the-hood -> only display image if really visible on page
- note: the Image src prop is assigned the object imported...
- Image has loading="lazy" automatically added
- width and height is inferred
- srcset attribute added ensuring different sized images are loaded depending on viewport/device
- serve in best image format eg. .webp when using chrome
- priority property -> to tell nextjs to load image as quickly as possible

### Image vs img

- see lesson ## 98. adding a custom component -> Images where an `<img>` element is used
- difference between using img element: using `<img>` you assign src="" the imported object.src

```js
import Image from "next/image";
import logoImg from "@assets/logo.png";

// ...
<Image src={logoImg} priority />; //note: assign the full object imported (and not the .src property (logoImg.src)
```

## 102. using more custom components

- PRACTICE LESSON... (NOTHING NEW)
- here you create a custom components/main-header/main-header-background.js component
- and refactor some of the css into css module
- in main-header.js: import MainHeaderBackground from "./main-header-background";
- main-header-background: return the background svg wrapped in `<div className={classes['header-background']}>`

## 103. populating the starting content

- PRACTICE LESSON... (NOTHING NEW)
- editing app/page.js
- div: creating a image slideshow
- div: a hero div with some text
- div: call-to-action with some links
- add app/page.module.css

## 104. preparing image slideshow

- nextjs working with `<Image>`
- components/images/image-slideshow.js
- components/images/image-slideshow.module.css
- NOTE: image-slideshow is importing with `import x from '@assets/x.jpg';`
- then an image array is created referencing the imports
- image-slideshow then creates Image element for each item in array
- useState to keep track of index in array,
- useEffect called once that creates const interval = setInterval(()=>{})
- setInterval that updates this useState() index calling useState's set method
- the set method has a method that just checks if current index is lower than the array length, if so +1 else set index to 0
- make sure to add cleanup function by return ()=>{//clearInterval(interval)}

### ERROR ERROR ERROR!

- note you get an error from above (react server component error - you're importing a component that needs useState. it only works in a client component, but none of its parents are marked with "use client", so they're Server components by default)

## 105. React Server components vs Client Components

- by default in nextjs all components are server side components (rendered on server)
- you can see the difference by testing if your console.logs show in browser or cmd/terminal (where you run the project)
- SO even tho everything is server components, you can still render it as a client-side components...
- and these need to be client-side components:
  - react hooks are a client-side concept
  - event handlers are client-side concept

### 'use client'

- if you want to build a client-side component have to declare 'use client'; (at top of file):

```js
"use client";
```

## 106. creating NavLink -> using client components efficiently

- /app/community/page.js
- /app/community/page.module.css

### usePathname -> getting active path to set active Link class

- externalize Link to NavLink component so only that part is client-side component...
- NEXTJS usePathname hook
- NOTE: usePathname is a hook (this should ring a bell ...DING!! -> SERVER COMPONENT requires 'use client';)
- NOTE: you want to add 'use client'; as far down the component tree as possible SOLUTION -> create a components/nav-link.js (NavLink)
- getting active path so you can set the class
- use path to test if it startsWith (nested pages) eg '/meals' OR equals string match
- if it does then you know it should be active

```js
//app/components/main-header/main-header.js
import NavLink from "./nav-link";

//...
return (
  <nav>
    <NavLink href="/meals">Browse Meals</NavLink>
    <NavLink href="/community">Community</NavLink>
  </nav>
);
```

```js
//components/main-header/nav-link.js
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}
```

## 107. meal details: output meal data & images with unknown dimensions

- PRACTICE LESSON... (uses dynamic route AND images dynamically loaded from db (no width/height at build-time) add "fill" attribute)

- ability to have a page which shows many items eg. meals (meals-grid)
- ability to share am item eg. a meal
- the purpose of meal detail page is to show the detail of one recipe

- meal-grid has many meal-items
- meal-item has a dynamic slot for the Link to open details page: `app/meals/[slug]/page.js`
- Image -> with import's nextjs can detect width/height.. but dynamically loaded from database, which is a path pointing to an image
- Image -> add "fill" attribute for dynamically loaded iamge: `<Image src={image} alt={title} fill />`

- app/meals/page.js
- app/meals/page.module.css
- components/meals/meals-grid.js
- components/meals/meals-grid.module.css
- components/meals/meal-item.js
- components/meals/meal-item.module.css

```js
//app/meals/page.js
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          meals <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose a recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your recipe</Link>
        </p>
      </header>
      <main>// meals grid here...</main>
    </>
  );
}
```

```js
//components/meals/meals-grid.js`
import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid(meals){
  return (
    <ul className={classes.meals}>
      {
        meals.map( meal=> (
          <li key={meal.id}>
            <MealItem {...meal}/>
          </li>
        ));
      }
    </ul>
  );
}
```

## 108. setting up SQLLite database

- install sqlLite db
- add initdb.js to root, it will setup the db (if it doesnt exist -> or use existing db) -> dummy meals
- run initdb.js `node initdb.js` -> meals.db is created

```cmd
pnpm i better-sqlite3
```

```js
const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary: "good burger",
    instructions: ``,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
```

## 109. NEXTJS way of loading data from db

- with nextjs backend and frontend are blended seamlessly together (no need for separate backend)
- NOTE: because nextjs components are by default SERVER side components, you can reach out directly to db
- create a new folder eg. lib/ and create a file that reaches out to db and gets data
- sqllite:
  - "run()" is used when you insert/change data,
  - "all()" is used when fetching data (all rows)
  - "get()" to get single row
- sqllite does not use promises but they can be used in our component by converting them to async functions
- NOTE: async functions are allowed in NEXTJS at component level (not possible with react)

```js
//lib/meals.js
import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  //simulate delay
  // await new Promise((resolve)=> setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
```

```js
//app/meals/page.js
import {getMeals} from '@/lib/meals';

//- NOTE: here async is added at component level (allowed in NEXTJS)
export default async function MealsPage(){
  const meals = await getMeals();

  return (<>
    // ...
    <MealsGrid meals={meals}>
    </>
  )
}
```

## 110. adding a loading page

- adding a loading page (loading.js)
- closest loading.js becomes active page when page/nested-page is loading data
- NOTE:here loading page replaces entire screen

```js
//app/loading.js
import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={classes.loading}>fetching meals</p>;
}
```

## 111. using `<Suspense>` + streamed responses for granular loading state management

- it would be better if only the portion of data that is loading data shows loading
- to not use this file, rename "loading.js" to something else so it has no context within NextJS because loading.js is reserved filename (renamed to loading-out.js)
- TODO: externalize the loading part to its own function (eg. Meals()) which returns the jsx for meals component
- AND because it is loading something you can use the react fallback `<Suspense>` wrapper
- `<Suspense fallback={}>` needs you to define fallback content that should be shown while loading in the fallback attribute

```js
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          meals <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose a recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>fetching meals</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
```

## 112. handling errors

- error.js files to handle errors when some error occurs eg. loading data fails
- error.js -> rendered by nextjs when error occurs (its a custom error page)
- NOTE: it only handles errors of page.js that sit in same folder OR that is in a nested layout -> so you can put at root folder to catch any errors
- we add to app/meals/error.js
- you can get more details about the error from the props of the error.js component -> "error" prop (OPTIONAL)
- the error component must be a client-side-component: `"use client";` to also catch errors on client-side
- simulate the error in lib/meals.js

```js
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  //simulate delay
  //await new Promise((resolve)=> setTimeout(resolve, 2000));

  //simulate load error
  throw new Error("loading meals failed");

  return db.prepare("SELECT * FROM meals").all();
}
```

## 113. not-found

- can add to top-level of project to handle all not-found routes
- not-found.js file to handle invalid routes
- test with an invalid route
- uses globals.css
- NOTE: will show closest 'not-found' OR 'error' page,
- so if error is closer than not-found page, it will show error page if its closer, unless a not-found page is put at same level as the error page to make them equally close.

```js
//app/not-found.js
export default function NotFound({ error }) {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>could not find requested page/resource</p>
    </main>
  );
}
```

## 114. loading and rendering meal details using DYNAMIC ROUTES & ROUTE PARAMS

- using dynamic routes and route params to load item details
- `app/meals/[slug]/page.js`
- NOTE: `meals/[slug]/page/` uses dangerouslySetInnerHTML={{__html:'...'}} (potential cross-site-scripting attack vulnerability)
- it is an object and you set the actual html via \_\_html attribute
- get slug via params prop `const dynamicId = params.slug;`
- getMeal() returns a promise so make it async OR remove async from lib/meals.js getMeal() function
- and we can call getMeal() directly since its a server-side component: `const meal = getMeal(dynamicId);`
- replace placeholders with item props (eg. meal's props see initdb.js initData() for item attributes (db columns))
- fix line breaks -> `meal.instructions = meal.instructions.replace(/\n/g, '<br/>');`

```js
//app/meals/[slug]/page.js
import Image from "next/image";
import { notFound } from "next/navigation";

import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug); //note: this params.slug is the same naming as the dynamic route app/meals/[slug]

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>"); //fix line breaks

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
```

- NOTE: here you are using a slug prop to access the DB
- INSECURE WRONG WAY: `return db.prepare('SELECT * FROM meals WHERE slug = ' + slug);` //insecure
- SECURE WAY -> FIX TO PROTECT FROM SQL ATTACKS: use "?" and .get() passing ? value to get(): `return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);`

```js
//lib/meals.js
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  // return db.prepare('SELECT * FROM meals WHERE slug = ' + slug);  //insecure
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
```

## 115. throwing not found for individual meals

- practice (NOTHING NEW)
- `import { notFound } from 'next/navigation';`
- shows closest error or not-found page if you call notFound() -> stops component from executing

## 116. share meals form -> this is C of CRUD (create meals)

- working with form
- create a meal
- app/meals/share/page.js
- app/meals/share/page.module.css

## 117. image picker input component

- create an image picker to allow user to upload image on the form AND preview uploaded image
- `<input className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={input}/>`
- we are hiding the default input picker button and adding our own buton.
- our button has type="button" so it doesnt submit the form (default is type submit)
- the button should click the hidden input type="file"
- BUT now error because eventHandlers are client side
- add "use client";
- use useRef from React to reference hidden input via ref.current eg. `const imageInput = useRef() `and trigger a click: `imageInput.current.click()`
- you can allow user to upload multiple files by adding "multiple" attribute to input

## 118. image preview for image picker

- handle image pick event
- use state to store the picked image
- and show preview
- use an onChange={} to call a function to handle the uploaded image
- then use `event.target.files[0]` to access the upload
- to show image preview, convert the uploaded data to data-url (a value that can be used for an input when working with image)
- get hold of the fileReader value using `fileReader.onload = ()=>{}`
- so the function assigned to onload is called when fileReader is done and you will be able to access file via `fileReader.result` (which is what we want to set in state)
- note useState is good usecase because if the browser refreshes we loose the state (which is what we want)

## 119. image picker improvements

1. Reset the previewed image if no image was selected - Add set setPickedImage(null); to the if(!file) block
2. Add the required prop to the (hidden) `<input>` element - This ensures that the `<form>` can't be submitted without an image being selected.

```js
//app/components/meals/image-picker.js

"use client";
import { useRef } from "react";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.preview}>
        {!pickedImage && <p>no image picked yet..</p>}
        {pickedImage && <Image src={pickedImage} alt="selected image" fill />}
      </div>
      <div className={classes.controls}>
        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          pick an image
        </button>
      </div>
    </div>
  );
}
```

## 120. NextJS handling form submissions (server actions) with "use server";

- form submission handling with NEXTJS

- OPTION 1: normal method attach action handler for handling `<form onSubmit={}>` -> prevent default, collect data, send to backend

### server action

- OPTION 2: NEXTJS/REACT way -> create a function in the component that has the form and call "use server"; which ensure the code is run only on server
- AND need to add "async" to the function
- assign the server function as a value to the action prop of form
- the action function receives `formData` object (FormData) which you can access form field that have "name" properties via `get()`
- to also retrieve Image pickers values also need to give it label and name attribute
- the image should be stored in file system and a path stored in the db.

```js
//app/meals/share/page.js
export default function ShareMealPage() {
  //server action
  async function shareMeal(formData) {
    "use server";

    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    console.log(meal);
  }

  //...
  return <form action={shareMeal}></form>;
}
```

## 121. storing server actions in separate files

- you can create server action functions but only if the component is NOT using "use client";
- can store server actions in separate files: lib/actions.js
- when defining actions in a separate file with 'use server'; ontop, all functions are treated as server actions
- TODO: move shareMeal() server action function to its own file lib/actions.js
- remove 'use server' from within the function as it is defined at top of file
- app/meals/share/page.js -> the shareMeal function needs to be imported
- with this change you CAN IF NEEDED convert app/meals/share/page.js as client-side code

```js
//app/lib/actions.js
"use server";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log(meal);
}
```

## 122. creating a slug & sanitizing user input for XSS protection

- storing the form data (SQLLITE)
- add function saveMeal(meal) to lib/meals.js
- meal object has the format (see above)
- the slug should be generated from the title
- install slugify
- install xss (protect against cross-site scripting)
- therefore we need to sanitize content sent by user
- create slug `const slug = slugify(meal.title);`
- sanitize: `const instructions = xss(meal.instructions);`
- note: slug is added on the fly to meal
- note: instructions is overriding old instructions with the sanitized version

```cmd
pnpm i slugify xss
```

```js
//app/lib/meals
//...
import slugify from "slugify";
import xss from "xss";

export function saveMeal(meal) {
  //create slug
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
}
```

## 123. storing uploaded images + storing data in the database

- storing images in db is bad for performance
- we will store uploaded images in public folder. NOTE: this will be updated later to use AWS S3 buckets
- images stored in public/ will be publically available
- get the file extension
- generate a unique filename (not the same name of uploaded) + append extension
- to prevent clashing filename, add more randomness to the filename by adding a unique string to filename
- nodejs provide fs api to write files
- import fs from node:fs;

### SAVE FILE

### 1. create a stream

- use fs to writestream with createWriteStream() allows us to write data to a file
- fs requires a path to file we want to write (where to put it (including filename)) -> it returns an stream object you can use to write the file

### 2. create buffered image using arrayBuffer()

- to use the stream.write() to write to stream -> write() expects a chunk
- what is a chunck? the image should be converted to a buffered image (which is image broken up into parts) -> call arrayBuffer() method: `meal.image.arrayBuffer()`
- note: arrayBuffer() will return a Promise which will resolve to the buffer...
- await the .arrayBuffer() call and add async to the function

### 3. convert array buffer to regular buffer

- we just created an arrayBuffer() in previous step.
- convert to regular buffer: Buffer.from()
- the second prop to stream.write() is the function to call once done writing and it receives error as a prop if there are errors

### 4. overwrite the meal object's .image attribute

- the image is now saved to public/images/ folder BUT we will only store the path in db.
- override .image: meal.image = `/images/*image filename*`
- NOTE: public folder is seen as root and does not need to be included in the paths.

### STORE IN DATABASE

### 5. save to db

- call db.prepare():
- OPTION 1 -> `VALUES (?, ?, ?, ?, ?, ?, ?)` method OR
- OPTION 2 -> easier way is to look at /initdb.js initData() and put the @ values into the VALUES () (see below)
  - SQL indentation usually matters
  - you can target the specific fields by their name with the @ syntax and then later just pass an object to the run() function.
  - better-sqllite package will look at the property names in the object you're passing-in and extract the property values matching the @ properties in VALUES()
  - order matters VALUES needs to match INSERT order
  - VALUES() comma's matter.
- call .run() and pass meal object: run(meal)

### call shareMeal()

- in /lib/actions.js -> shareMeal() -> calls saveMeal(meal) and then redirects: redirect('/');

```js
//lib/meals.js
import fs from 'node:fs';

export function saveMeal(meal){
  //create slug
  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  //1.
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  //2.
  const bufferedImage = await meal.image.arrayBuffer();

  //3.
  //use stream to write the file -> convert the arrayBuffer to regular Buffer
  stream.write(Buffer.from(bufferedImage), (error)=>{
    if(error){
      throw new Error('save failed');
    }
  });

  //4.
  meal.image = `/images/${fileName}`;

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

```

```js
//lib/actions.js
"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  //console.log(meal);
  await saveMeal(meal);
  redirect("/");
}
```

## 124. Form submission status - useFormStatus()

- when form is being submitted -> give feedback to user that something is happening.
- React has useFormStatus() hook

```js
"use client";
import { useFormStatus } from "react-dom";

const status = useFormStatus();
//status.pending = ...
```

- useFormStatus() returns an object with some useful props which you can use object destructing to extract.
- eg. `.pending` property (boolean) true if there is an ongoing request, or otherwise false
- it requires a client component: "use client";
- NOTE: the useFormStatus() hook will only work if it is inside of the form (ie. a child component of `<form>`)
- you might not want the page to be a client side component just to conditionally update button

### DO THIS

- FIX: move to its own component
- made form submit component more generic by requiring user pass-in label `<FormSubmit label=""/>`

```js
//app/components/meals/form-submit.js
"use client";
import { useFormStatus } from "react-dom";

export default function FormSubmit({ label }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting..." : label}</button>
  );
}
```

- using `<FormSubmit>` component

```js
///app/meals/share/page.js
import { shareMeal } from "@/lib/actions";
import FormSubmit from '@components/meals/form-submit';
...
export default function ShareMealPage() {
  return (
    <>
      <form action={shareMeal}>
        ...
        <ImagePicker label="your image" name="image" />
        <p className={classes.actions}>
          <FormSubmit label="share meal"/>
        </p>
      </form>
    </>
  );
}
```

## 125. server-side input validation

- should validate form values

### client-side-validation

- there is built in validation -> form fields have 'required' props to ensure cant submit empty values
- BUT... users can remove 'required' prop from form (developer tools) and then submit invalid values to the backend

### server-side-validation

- server action functions -> /lib/actions.js
- validate the formData values
- should actually use validator library/tools...
- if form data does not pass validation you can throw an error, but it destroys all form data sent
- add an error.js page for app/meals/share to catch the errors of app/meals/share/page.js (NOTE: there is better way to handle errors with useActionState())

```js
//lib/actions.js
// ...
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  const isInvalidText = (text) => {
    return !text || text.trim() === "";
  };

  //validation:
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("invalid input");
  }

  // ...
}
```

## 126. useFormState() / useActionState()

- ERROR -> Q&A says useFormState() works and useActionState() needs canary version of react and might not work with nextjs so use useFormState()

- useFormState -> note: useFormState is part of 'react-dom'
- useActionState will give an error like:

```ERROR
TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_1__.useActionState) is not a function or its return value is not iterable
```

```js
import { useFormState } from "react-dom";
```

<!-- - NEW METHOD: useActionState -> note: useActionState is part of 'react'
- supported by canary version of react
```js
import { useActionState } from 'react';
``` -->

## 127. sever-action response object and useActionState()/useFormState() - handle validation more elagantly

- useFormState() works!
- useActionState() seems newer BUT only supported on React canary version..
- handle validation more elagantly in action functions by returning response objects (no methods allowed in this object)

```js
//lib/actions.js

//validation:
if (
  isInvalidText(meal.title) ||
  isInvalidText(meal.summary) ||
  isInvalidText(meal.instructions) ||
  isInvalidText(meal.creator) ||
  isInvalidText(meal.creator_email) ||
  !meal.creator_email.includes("@") ||
  !meal.image ||
  meal.image.size === 0
) {
  //throw new Error('invalid input');
  return {
    message: "invalid input",
  };
}
```

### useActionState() hook /useFormState() hook

- we can get the response object in the form (in our project it is the share page (app/meals/share/page.js) - the Create of CRUD) using useActionState() / useFormState() hook

```js
import { useFormState } from "react-dom";
//import { useActionState } from 'react';
```

- useActionState/useFormState is responsible for managing state of page or component that has a form that will be submited with server actions
- needs "use client";
- useActionState() / useFormState() needs 2 arguments:
  1. actual server action that should be triggered when form is submitted (shareMeal)
  - NOTE: using useActionState() / useFormState() the server action has a different structure: useActionState() / useFormState() will pass 2 parameters to the server action
  - eg. shareMeal() now receives 1st prop the previous state (possibly not used but required to include) and formData as before but as 2nd prop
  2. initial state of component before action response
- useActionState / useFormState will give array with 2 elements:
  1. state -> latest response from server action
  2. formAction -> which you should set on form action prop

### State

- state will then either be:
- A - initial state of component before action response
- B - response received back from shareMeal action function
- use returned state: `{state.message && <p>{state.message}</p>}`

```js
//app/meals/share/page.js

"use client";
// import { useActionState } from 'react';
import { useFormState } from "react-dom";
import { shareMeal } from "@/lib/actions";

export default function ShareMealPage() {
  // const [formState, formAction] = useActionState(shareMeal, {message:null}); //useActionState requires canary version of react
  const [formState, formAction] = useFormState(shareMeal, { message: null });

  //...
  <form className={classes.form} action={formAction}>
    ...
    {formState.message && <p>{formState.message}</p>}
  </form>;
  //...
}
```

```js
//lib/actions
export async function shareMeal(prevState, formData) {}
```

## 128. building for production and understanding nextjs caching

- moving development to production...
- `npm run build` prepare for production
- `npm start`

```cmd
npm run build
npm start
```

## 129. revalidatePath() -> triggering cache revalidations

- `import { revalidatePath } from 'next/cache';`
- you will see that nextjs caches the production pages so that even if you were to rebuild, the cache still exists
- you need to tell nextjs to throw away its cache when you add a meal (revalidate)
- call revalidatePath() to revalidate the cache() before route path eg.

```js
//lib/actions.js
import { revalidatePath } from "next/cache";

await saveMeal(meal);
// revalidatePath('/meals', 'layout')
revalidatePath("/meals");
redirect("/meals");
```

- if you use "layout" it revalidates all nested pages too, otherwise "page" only revalidates the page
- "page" is the default so can be omitted
- right before a redirect() is triggered to revalidate

## 130. dont store files locally on the filesystem

- public/ folder works for development, but in production nextjs copies public/ to `.next` folder
- and its the .next/ folder that will be used by the nextjs production server
- see nextjs "static assets" - https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets
- USE third party storage services like aws s3

## 131. Storing Uploaded Images In The Cloud (AWS S3)

- NB lesson!
- working on git branch: aws-storing-images-in-aws-s3
- project folder: /03-3-foodies-image-storage-using-aws-s3
- TODO: update 03-2-foodies/ so that it stores images on [aws-s3](https://aws.amazon.com/s3/) bucket instead of locally in public folder

1. Create an AWS account

2. Create a S3 bucket

- navigate to s3 console
- create a bucket (container used to store files)
- every bucket has globally unique name
- use a prefix eg. <your-name>-nextjs-demo-users-image
- confirm default settings..

## READING IMAGES OFF AWS S3 BUCKET

3. Upload the dummy image files

- select the created bucket
- copy images to bucket (you can select multiple images in project public/) by clicking upload

4. Configure the bucket for serving the images

- configure the bucket such that the images can be loaded from the NextJS website
  NOTE: for security reasons, by default, files not accessible

### disable "Block all public access"

- TODO: we must update the bucket settings to make sure the images can be viewed by everyone.
- "Permissions" tab -> Edit Block public access (bucket settings) -> unselect "Block all public access" -> save changes

### add Bucket policy

- TODO: AND you must add a "Bucket Policy" (a policy document - that allows you to manage the permissions of the objects stored in the bucket)
- replace `DOC-EXAMPLE-BUCKET` with the bucket name (no quotes) -> save changes
- Now the bucket is configure to grant access to all objects inside of it to anyone who has a URL pointing to one of those objects.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
          "s3:GetObject",
          "s3:GetObjectVersion"
      ],
      "Resource": [
          "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"
      ]
    }
  ]
}
```

### test if it works

- To test if everything works, click on one of the images you uploaded (in the bucket).
- Then click on the "Object URL" - if opening it works (and you can see the image), you configured everything as needed.

5. Update the NextJS code to use those S3 images

- update NextJS app to load images from aws-s3 bucket
- project folder -> empty out public/
- if you also delete the .next folder in the NextJS project and you then visit localhost:3000/meals, you should see a bunch of meals without images.

### update referenced images

- edit the database data by updating the initdb.js file:
  - Change all the image property values from image (ie. remove "/images/"): '/images/burger.jpg' to image: 'burger.jpg' (and do that for all meals).

```js
//before
<Image src={image} alt={title} fill />
//after
<Image src={`S3_URL_BUCKET_NAME/${image}`} alt={title} fill />
```

- goto: `components/meals/meal-item.js` and update image source (use string literal) by replacing "S3_URL_BUCKET_NAME" with
  the object url \*(get from AWS): eg. `https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com`
- The new src value is a string that contains the S3 URL to your bucket objects (i.e., the URL you previously clicked for testing purposes - without the image file name at the end). The actual image name that should be loaded is then dynamically inserted via ${image}.
- Note: This will only work if the images stored in the S3 bucket have the names referenced in the initdb.js file!

### AND also update referenced images here...

- You should also update the app/meals/[mealSlug]/page.js file and make sure that the image on this page is also fetched from S3:

```js
<Image
  src={`https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/${meal.image}`}
  alt={meal.title}
  fill
/>
```

### RESET DB values

- reset the database data, you should delete your meals.db file (i.e., delete the SQLite database file) and re-run node initdb.js to re-initialize it (with the updated image values).

```cmd
node initdb.js
```

- NOTE: doing above step will cause an error:

```ERROR
Error: Invalid src prop (https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/burger.jpg) on `next/image`, hostname "maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com" is not configured under images in your `next.config.js`
```

6. FIX -> NEXTJS: Allowing S3 as an image source

- by default, NextJS does not allow external URLs when using the `<Image>` component.
- You explicitly have to allow such a URL in order to get rid of this error
- This `remotePatterns` config allows this specific S3 URL as a valid source for images.
- NOTE: the hostname does not include "https://" as its defined under "protocol"
- in next.config.js:

```js
//next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
```

## SAVING IMAGES TO AWS S3 BUCKET

7. Storing uploaded images on S3

- when creating a meal, we upload an image and we should should forward this image to AWS S3.
- aws has a package: `@aws-sdk/client-s3` that allow you to interact with S3 - e.g., to store files in a specific bucket.

```cmd
pnpm i @aws-sdk/client-s3
```

- lib/meals.js (file where saving to db happens)
- import { S3 } from '@aws-sdk/client-s3';
- initialize it by creating a new instance of S3() (e.g., right above the line where the db object is created)
- aws region -> get from aws object properties

```js
//lib/meals.js (file where saving to db happens)
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "ap-southeast-1", //get from aws object properties -> aws region
});
const db = sql("meals.db"); // <- this was already there!
```

- edit lib/meals.js -> the saveMeal() function and remove all code that was related to storing the image on the local file system.

### REMOVE

```js
//storing the image on the local file system
//1.
// const stream = fs.createWriteStream(`public/images/${fileName}`);

// //2.
// const bufferedImage = await meal.image.arrayBuffer();

// //3.
// //use stream to write the file -> convert the arrayBuffer to regular Buffer
// stream.write(Buffer.from(bufferedImage), (error)=>{
//   if(error){
//     throw new Error('save failed');
//   }
// });
```

### ADD

- replace bucket value...

```js
s3.putObject({
  Bucket: "maxschwarzmueller-nextjs-demo-users-image",
  Key: fileName,
  Body: Buffer.from(bufferedImage),
  ContentType: meal.image.type,
});
```

- update meal.image

```js
//BEFORE
meal.image = `/images/${fileName}`;

//AFTER
meal.image = fileName;
```

### Grant NextJS backend AWS access permissions (.env.local)

8. Granting the NextJS backend AWS access permissions

- VERY IMPORTANT STEP
- because we are in Creation phase of CRUD, need to grant the NextJS app S3 access permissions.

### .env.local

- previous steps we configured S3 to serve the bucket content to everyone.
- But we did not (and should not!) configure it to allow everyone to write to the bucket or change the bucket contents.
- set up AWS access keys for your app -> To grant our app appropriate permissions
- create an .env.local file
- in .env.local add two key-value pairs: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
- finally, after the above steps, you should be able to create new meals, upload images and see them on /meals. Even in production! Because now, the images are stored on S3!

- NOTE: .env.local is excluded from the git commit in the .gitignore but will be required
- you need to create this file in root of project called: `.env.local`
- you can rename: `template-.env.local` to `.env.local` and add aws access key details.
- https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
- file will automatically be read by NextJS and the environment variables configured in there will be made available to the backend (!) part of your app.
- get access key details from aws

```.env.local
AWS_ACCESS_KEY_ID=<your aws access key>
AWS_SECRET_ACCESS_KEY=<your aws secret access key>
```

### where to get access keys?

- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
- You get those access keys from inside the AWS console (in the browser). You can get them by clicking on your account name (in the top right corner of the AWS console) and then "Security Credentials".
- Scroll down to the "Access Keys" area and create a new Access Key. Copy & paste the values into your .env.local file and never share these keys with anyone! Don't commit them to Git or anything like that!

## 132. adding static metadata

- metadata used by search engine crawlers / link share
- nextjs `metadata` is reserved inside page / layout files.
- if you add metadata to a layout, it will automatically be added for all pages wrapped by layout UNLESS a page specifies its own metadata.
- eg. app/meals/page.js -> add metadata will override the metadata in app/layout.js
- the meta "title" will show up in the browser tab
- metadata for pages:

```js
export const metadata = {
  title: "",
  description: "",
};
```

## 133. adding dynamic metadata

- for dynamic pages eg. `app/meals/[slug]/page.js` we use dynamic metadata:
- NEXTJS supports dynamic metadata via: `export async function generateMetadata(){}`
- if nextjs does not find metadata, it looks for generateMetadata() function and executes it.
- the function returns a metadata object
- the function receives the same data the page component function receives as props (an object with params key)

```js
//app/meals/[slug]/page.js

export async function generateMetadata({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }
  //...
}
```

## 134. module summary

- watch this to refresh on what you did this module:
- https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/41159816

---

# Section 04 - Routing and Page Rendering - Deep Dive
[back (table of contents)](#table-of-contents)

## 136,137,138,139 Practice routes / Dynamic routes / using dummy data for dynamic content
- PRACTICE: routes exercise
- create a news/page.js page which lists news items
- create a news/[slug]/page.js page which is the news details page
- create a main-header.js which links to home and news/
- use dummy content to dynamically show news details page app/news/[slug]/page.js

## 140 "Not found" page 
- see lesson 113. not-found

## 141. setup and using parallel routes
- routes in parallel
- render the content of 2 separate routes (separate paths) on same page 
- eg. `/archive/@archive/page.js` AND `/archive/@latest/page.js`
- usually the layout.js receives the children prop eg. `export default function RootLayout({ children }) {}` HOWEVER, when you have parralel routes, instead of just "children" prop...the layout receives one prop per parallel "@" route
- with the name you chose after the @ as a prop name eg. if parallel routes are `archive/@archive` and `archive/@latest`
- note: you visit the `http://localhost:3000/archive` layout route

- REQUIRED:
  1. layout.js -> add `app/archive/layout.js`
  2. one subfolder (starts with @) -> for each parallel route (`app/archive/@archive/page.js`) and (`app/archive/@latest/page.js`)

```js
//app/archive/layout.js

//eg. if parallel routes are 
//`app/archive/@archive` and 
//`app/archive/@latest`

export default function ArchiveLayout({archive, latest}){
  return (
    <div>
      <h1>News archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  )
}
``` 

### 142. parallel routes & nested routes
- allow user to pick year and show news belonging only to that year.
- add a dynamic route for years: 
- `app/archive/@archive/page.js` (ArchivePage) will output links for all available years that have news. 
- clicking on year opens FilteredNewsPage `app/archive/@archive/[year]/page.js` 
- `lib/news.js` (helper file with js functions that filter results)
  - getAllNews()
  - getLatestNews()
  - getAvailableNewsYears()
  - getAvailableNewsMonths()
  - getNewsForYear()
  - getNewsForYearAndMonth()
- If you goto http://localhost:3000/archive/2021 -> you will get a "not found" because 2 routes are rendered on same page BUT one of the other parallel routes (archive/@latest/page.js), do not support the `/archive/[year]` route.
- Nextjs allows you to add a file `default.js` when dealing with parallel routes for default fallback content...
- eg. `@latest/default.js` if it does not have a page for the path.
- so you can put the same content as `@latest/page.js`, but if that is the case you can remove the page.js and just have the `@latest/default.js`.

```js
//app/archive/@archive/[year]/page.js
import { getAvailableNewsYears } from "@/lib/news";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

```

```js
//app/archive/@latest/default.js
import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage(){
  const latestNews = getLatestNews();
  
  return (
  <>
    <h2>Latest News</h2>
    <NewsList news={latestNews}/>
  </>
  );
}
```

## 143. catch all routes
- syntax is `[[...filter]]`
- TODO: change `archive/@archive/[year]` to a catch-all route `archive/@archive/[[...filter]]` 
- this will catch all routes after `/archive/`
- its not params.year but now... params.filter
  - eg. there are 0 segments if url is /archive/
  - eg. there is 1 segment if url is /archive/2024
  - eg. there are 2 segments if url is /archive/2024/3
- const filter = params.filter // console.log(filter) gives an error. this is because `archive/@archive/[[...filter]]/page.js` (catch-all) and `archive/@archive/page.js` conflict.
```cmd
`Error: You cannot define a route with the same specificity as a optional catch-all route ("/archive" and "/archive[[...filter]]").`
```
- delete the archive/@archive/page.js since `/[[...filter]]` will catch all.
- now filter property holds array of all matched path segments.

```js
import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({params}){
  // const newsYear = params.year; //accessing the dynamic route app/archive/@archive/[year] value
  
  //using catch-all route
  const filter = params.filter;
  console.log(filter);
  
  const links = getAvailableNewsYears();

  // const news = getNewsForYear(newsYear);
  // return <NewsList news={news}/>
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
```

## 144. Catch-All Fallback Routes & Dealing With Multiple Path Segments
- url: localhost:3000/archive
- TODO: working with URL -> if news year is selected, it should show news for that year
- Multiple Path Segments -> using catchall syntax in folder structure to get a value in the filter array
- if url is http://localhost:3000/archive/2014 
- AND folder uses catch-all syntax `/[[...]]` 
  - eg. `app/archive/@archive/[[...filter]]/page.js`...
- params passed in as a prop has the `filter` prop which is an array that has each path segment value
- NOTE: filter?.[0] syntax is the same as: `filter ? filter[0] : undefined;`
- AND if year is already selected, show months ie. links updated if year is selected

```js
//eg url: http://localhost:3000/archive/2014/1
//using catchall route
  const filter = params.filter;

  const selectedYear = filter?.[0]; //gets 1st segment (array element 1)
  const selectedMonth = filter?.[1]; //gets 2nd segment (array element 2)

  let news;
  let links = getAvailableNewsYears();  //-> YEARS

  //if year has already been selected -> show month links
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear); //news for a given year
    links = getAvailableNewsMonths(selectedYear); //-> MONTHS
  }

  //both selectedYear and selectedMonth -> show news with both these filters
  if(selectedYear && selectedMonth){
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>no news for selected content</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {
              links.map((link) => {
                const href= selectedYear ? 
                `/archive/${selectedYear}/${link}` //here link is a month
                : `/archive/${link}`;         //here link is a year

                return (
                  <li key={link}>
                    <Link href={href}>{link}</Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
```

## 145. throwing (route-related) errors
- checking url route is valid
- note you have to compare the number vs number so convert selectedYear and selectedMonth to number
```js
if(selectedYear && !getAvailableNewsYears().includes(+selectedYear) || 
  selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)){
  throw new Error('Invalid filter');
}
```

## 146. handling errors with error pages
- see [112. handling errors](#112-handling-errors)
- custom error handling without breaking the webpage
- error.js
- 'use client'; - to handle errors on both server + client
- the error will be handled by error.js file next to the page:
  
`@archive/[[...filter]]/page.js` 
and
`@archive/[[...filter]]/error.js`

## 147. server vs client components
- REDUNDANT lesson see [lesson 106 - creating NavLink -> using client components efficiently -> usePathname()](#usepathname---getting-active-path-to-set-active-link-class)

## 148. nested routes inside dynamic routes
- this lesson only nests a route inside a dynamic route
- app/news/[slug]/image/page.js
- note: the nested child components also get access to the params.

## 149. route interception / intercepting route
- NEXJS -> https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes

- normal: `localhost:3000/news/[slug]/image/page.js`
- then i set up interception: `localhost:3000/news/[slug]/(.)image/page.js` to intercept `[slug]/image/page.js `

### HOW TO? 
you intercept a route based on the folder naming syntax: ()name-of-path-to-intercept 
  - eg. `news/[slug]/(.)image/page.js` intercepts `news/[slug]/image/page.js`
- you can set up an intercepting route by creating a folder named: `()` followed by the name of the path segment you want to intercept
  eg. you want to intercept `news/[slug]/image/` then you can create a folder `news/[slug]/(.)image` which will intercept based on whats between opening and closing brackets () from the intercept folder to the path to be intercepted
    - (.) same level (see above) 
    - (..) one level above etc
- then the intercept route `news/[slug]/(.)image/page.js` should show content as if the page was intercepted

### Nextjs documentation
- THE OFFICIAL NEXTJS NOTES EXPLAIN THIS CONCEPT A BIT BETTER...
- Intercepting Routes: Allow you to intercept a route and show it in the context of another route. 
- Intercepting routes allows you to load a route from another part of your application within the current layout. This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context
- eg. For example, when clicking on a photo in a feed, you can display the photo in a modal, overlaying the feed. In this case, Next.js intercepts the /photo/123 route, masks the URL, and overlays it over /feed.


<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fintercepting-routes-soft-navigate.png&w=1920&q=75"  alt="Next.js Intercepted Routes" height="300">

- However, when navigating to the photo by clicking a shareable URL or by refreshing the page, the entire photo page should render instead of the modal. No route interception should occur.

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fintercepting-routes-hard-navigate.png&w=1920&q=75"  alt="Next.js Intercepted Routes" height="300">

### convention
- Intercepting routes can be defined with the (..) convention, which is similar to relative path convention ../ but for segments.
- You can use:

- `(.)` to match segments on the same level  
- `(..)` to match segments one level above  
- `(..)(..)` to match segments two levels above  
- `(...)` to match segments from the root app directory  
- For example, you can intercept the photo segment from within the feed segment by creating a (..)photo directory.  

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fintercepted-routes-files.png&w=1920&q=75" alt="Next.js Intercepted Routes" height="300">

- NOTE: Note that the (..) convention is based on route segments, not the file-system. 
- so @parallel routes are not added to url and are ignored from intcepting route calculations when calculating how many levels to traverse between ().  

### Examples -> Modals
  
- Intercepting Routes can be used together with [Parallel Routes](#141-setup-and-using-parallel-routes) to create modals. This allows you to solve common challenges when building modals, such as:

  - Making the modal content shareable through a URL.
  - Preserving context when the page is refreshed, instead of closing the modal.
  - Closing the modal on backwards navigation rather than going to the previous route.
  - Reopening the modal on forwards navigation.

- the idea of intercepted route: is that you see different content depending on how you got to the page.
- can have same url (with same segmented paths) for 2 different page.js files depending on how you got to the page:
  1. a link navigated to within the page (internal navigated link) should open an image modal
  2. BUT a link navigated to externally via browser url or external link should show the image on a page
- this is done by intercepting the /photo segment from within /feed segment by creating a (...)photo directory

- Consider the following UI pattern, where a user can open a photo modal from a gallery using client-side navigation, or navigate to the photo page directly from a shareable URL:

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fintercepted-routes-modal-example.png&w=1920&q=75" alt="Next.js Intercepted Routes" height="300">

- In the above example, the path to the photo segment can use the (..) matcher since @modal is a slot and not a segment. This means that the photo route is only one segment level higher, despite being two file-system levels higher.

- [Parallel Routes documentation for a step-by-step example](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals)
- [Nextjs image example](https://github.com/vercel-labs/nextgram)

## 150. combining parallel and intercepting routes
- TODO: either show intercepted route as an image in a modal OR show as a regular fullscreen page
- adjust `/news/[slug]/(.)image/page.js` to open a modal 

```js
//app/news/[slug]/(.)image/page.js
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function InterceptedImagePage({params}){
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if(!newsItem){
    notFound();
  }

  return (
  <>
    <div className="modal-backdrop"/>
    <dialog className="modal" open>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
      </div>
    </dialog>
  </>
  ) 
}

```
- BUT also need to make modal an overlay -> can use [parallel routing](#141-setup-and-using-parallel-routes) to show content from 2 routes on same page
- create a layout file: `app/news/[slug]/layout.js`
- then we set up 2 routes shown in parallel for the layout:
1) `app/news/[slug]/page.js` page...default page
2) 
`app/news/[slug]/@modal` , 
`app/news/[slug]/@details` and move the page.js from 1. into /@details
- NOTE: if you always want to show this `[slug]/page.js` in /@details ... you leave it there and it will always be available via layout.js as children prop. ie. page.js will be passed as child of layout.js (default)
- the intercepted route [slug]/(.)image is moved into @modal/(.)image and path (.) does not change even though its in a folder because parrallel routes (@folder) are ignored. the (//path) is a path in the url not directory folder structure
- `app/news/[slug]/layout.js` now receives modal as a prop (because parallel route is @modal) `export default function NewsDetailLayout({children, modal})`
- add a page.js or default.js in @modal eg. `app/news[slug]/@modal/page.js` which will return null and show at same time as intercepting route `(.)image`

```js
//app/news/[slug]/@modal/page.js
export default function ModalDefaultPage(){
  return null;
}
```

## 152. navigating programmatically
- TODO: ability to click on modal backdrop (navigate programatically) and take user back to page they coming from
- app/news/[slug]/@modal/(.)image/page.js
- `import {useRouter} from 'next/navigation';`
- useRouter gives useful methods to navigate eg. back() 
- useRouter only works inside client components

```js
//app/news/[slug]/@modal/(.)image/page.js
"use client";
import {useRouter} from 'next/navigation';

const router = useRouter();
//...

<div className="modal-backdrop" onClick={router.back}/>
```
---

# Section 05 - Data Fetching - Deep Dive
[back (table of contents)](#table-of-contents)

---

# Section 06 - Mutating Data - Deep Dive
[back (table of contents)](#table-of-contents)

---

# Section 07 - Understanding & Configuring caching
[back (table of contents)](#table-of-contents)

---

# Section 08 - NextJs app optimizations
[back (table of contents)](#table-of-contents)

---

# Section 09 - user authentication
[back (table of contents)](#table-of-contents)

---

# Section 10 - round up and next steps
[back (table of contents)](#table-of-contents)

---

# Section 11 - Pages & File-based routing
[back (table of contents)](#table-of-contents)

---

# Section 12 - Project Time: working with file-based routing
[back (table of contents)](#table-of-contents)

---

# Section 13 - page pre-rendering and data-fetching
[back (table of contents)](#table-of-contents)

---

# Section 14 - project time: page pre-rendering & data-fetching
[back (table of contents)](#table-of-contents)

---

# Section 15 - optimizing Next.js apps
[back (table of contents)](#table-of-contents)

---

//FULL STACK REACT

# Section 16 - adding backend code with API Routes (fullstack react)
[back (table of contents)](#table-of-contents)

---

# Section 17 - Project time: API Routes
[back (table of contents)](#table-of-contents)

---

# Section 18 - App-wide state (react context)
[back (table of contents)](#table-of-contents)

---

# Section 19 - complete app example (build a full blog A-Z)
[back (table of contents)](#table-of-contents)

---

# Section 20 - Deploying Nextjs apps
[back (table of contents)](#table-of-contents)

---

# Section 21 - Adding Authentication
[back (table of contents)](#table-of-contents)

---

# Section 22 - Optional Nextjs Summary
[back (table of contents)](#table-of-contents)

---

# Section 23 - Course Roundup
[back (table of contents)](#table-of-contents)

---