## Namaste React Course by Akshay Saini

# Chapter 07 - Finding the Path

## Q: What are various ways to `add images` into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.
Example :

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

## Q: What would happen if we do `console.log(useState())`?

A: If we do `console.log(useState())`, we get an array `[undefined, function]`, where first item in an array is `state`is`undefined`and the second item in an array is`setState` `function` which is responsible to set the state value inside the first item.

## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```

## Q: What is `SPA`?

A: It means that navigating to specific page/component without loading the entire page is known as `single page application` or `SPA`.

## Q: What is a Nullish Coalescing Operator or Double Question Mark (??) in JavaScript?

A: The Nullish coalescing operator is a new feature introduced in this ECMA proposal and is denoted by the double question marks (??). Javascript double question mark is a logical operator that takes two values and returns the right-hand value if the left-hand value is undefined or null, Else returns the left-hand operand.

## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A:

- `Server Side Routing`: Server-side routing typically involves a new `HTTP` request being made to the server every time the user navigates to a different page or URL within the application. The server then generates the appropriate HTML content and sends it to the client, resulting in a full page refresh.

- `Client Side Routing`: For loading `content` to the client based on `changing the route`, The browser doesn't make any `HTTP` requests to the server instead JavaScript code running in the browser manages the routing logic. When a user clicks on a link or enters a URL, the JavaScript code updates the content displayed on the page without reload the entire page.

## What is `Link` component ?

A: In React, the Link component is a part of the `react-router-dom `library, which is commonly used for `client-side routing` in Single Page Applications (`SPAs`). The Link component provides a way to navigate between different routes or pages within your application without causing a full page reload. Instead of using regular anchor (<a>) tags with href attributes.

Syntax:

```
<Link to="/about">About</Link>
```
