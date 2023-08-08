## Namaste React Course by Akshay Saini

# Chapter 05 - Let's get Hooked!

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?

A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
In `Named export`, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
```

and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.

```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from MyComponent.js file like:

```
const MyComponent = () => {}
export default MyComponent;
```

and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.

```
import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
```

and the component is imported from MyComponent.js file like:

```
import * as MainComponents from "./MyComponent";
```

Now we can use them in JSX as:

```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

We can use `Named export` and `Default export` together. So you should export like:

```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```

and import like:

```
import MyComponent, {MyComponent2} from "./MyComponent";
```

## Q: What is the importance of `config.js` file?

A: config.js file is typically a JavaScript file that contains configuration settings, parameters, or variables for a specific application, framework, or system.

```
const config = {
  apiKey: 'your-api-key',
  apiUrl: 'https://api.example.com',
  debugMode: true,
};
export default config;
```

This file can be imported into other parts of the application where these configuration settings are needed, allowing developers to easily manage and update these settings in one central location.

## Q: What are `React Hooks`?

A: React Hooks are a feature introduced in React 16.8, React Hooks are simple JavaScript functions, it allow function components to have access to state and other React features.

`React provides a bunch of standard in-built hooks:`

- `useState`: This Hook allows you to add state to your functional components.
- `useEffect` It allows you to perform side effects in your component, such as data fetching or DOM manipulation.
- `useContext`: This Hook allows you to access the context of a parent component without prop drilling. It's useful for sharing data that can be considered "global" within a subtree of components.
- `useReducer`: This Hook is an alternative to useState and is used for managing more complex state logic. It's especially useful when state transitions follow a defined pattern.
- `useMemo` and `useCallback`: These Hooks are used for optimizing performance. `useMemo` memoizes the result of a computation, while `useCallback` memoizes a function so that it doesn't get recreated on every render.
- `useRef`: This Hook allows you to create a mutable reference to a DOM element or a value that persists across renders. It's often used to access DOM elements directly or to store values that don't trigger re-renders.

There are three `Rules` for Hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Don't call Hooks inside loops, conditions, or nested functions.

## Q: Why do we need `useState Hook`?

A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. It returns an array with two values: the current state and a function to update it.
syntax:

```
const [state, setState] = useState(initialValue);
```

for more details: [use State](https://blog.logrocket.com/guide-usestate-react/)

## Q: Why React is fast ?

A: React does efficient `DOM` manipulation, it uses a diff algorithm which does efficient `DOM` manipulation.
`Diff algorithm` check the changes between updated virtual `DOM` and previous `DOM` and then it applies the difference to the actual `DOM`.
