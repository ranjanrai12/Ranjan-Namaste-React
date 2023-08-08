## Namaste React Course by Akshay Saini

# Chapter 04 - Talk is Cheap, show me the code

## Q: Is `JSX` mandatory for React ?

A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.

Example:

```
const heading = <h1>This is heading</h1>
```

## Q: Is `ES6` mandatory for React?

A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

## Q: How can I write `comments` in JSX?

A: Single Line Comment:

```
{/* A JSX comment */}
```

Multiple line comments:

```
{/*
  Multi
  line
  JSX
  comment
*/}
```

## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?

A: `React Fragments` allow you to wrap or group multiple elements without adding an extra node to the DOM

Example:

```
function Parent () {
  return (
    <React.Fragment>
      <Child1 />
      <Child2 />
    </React.Fragment>
  );
}
```

`<>` is the shorthand tag for `React.Fragment` which allows us to group a list of elements without wrapping them in a new node.

```
function Parent() {
    return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
}
```

The only difference between them is that the shorthand version does not support the key attribute.

```
{
    str.split('\\n').map((item, index) => {
        return (
            <Fragment key={index}>
                {item}
                <br />
            </Fragment>
        );
    });
}
```

## Q: What is `Reconciliation` in React?

A: The `reconciliation` algorithm is the process React uses to update the `DOM` in response to changes in the component state. When a component’s state changes, React will re-render the component and its children.The `reconciliation` algorithm starts by comparing the virtual `DOM` of the previous state with the virtual `DOM` of the new state. If there are no differences, React will not make any changes to the real `DOM`. If there are differences, React will update the real `DOM` to match the new state, and this comparision process is known as `diffing` algorithm.

## Q: Q: What is `React Fiber`?

A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

- Pause, resume, and restart rendering work on components as new updates come in.
- Reuse previously completed work and even abort it if not needed.
- Split work into chunks and prioritize tasks based on importance.

## Q: Why do we need `keys` in React?

A: `Keys` is a reserved attribute in React, which help to identify which items have changed, are added, or are removed. `keys` need to include when creating lists of elements in React.

```
<ul>
    <li key={0}>1</li>
    <li key={1}>2</li>
    <li key={2}>3</li>
</ul>
```

## Q: Can we use `index as keys` in React?

A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance issue due to unnecessary re-render and also can cause issues in data mapping in case list items are sorted, filtered, or deleted.
for More details just read below blogs:

[Why not to use index as key in React Lists (Practical Example)](https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66)

## Q: What is `props in React`?

A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)).

#### Example

```
function App() {
  return (
    <div className="App">
        <Header name=""></Header>
    </div>
  )
}
```

## Q: What is `Config Driven UI`?

A: In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase.

## Q: Difference between `Virtual DOM` and `Real DOM`?

A: A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

- `Virtual DOM`
  - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
  - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
  - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
  - The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

| `Real DOM`                                                       | `Virtual DOM`                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| DOM manipulation is very expensive                               | DOM manipulation is very easy                            |
| There is too much memory wastage                                 | No memory wastage                                        |
| It updates Slow                                                  | It updates fast                                          |
| It can directly update HTML                                      | It can’t update HTML directly                            |
| Creates a new DOM if the element updates.                        | Update the JSX if the element update                     |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application                         | It is only a virtual representation of the DOM           |
