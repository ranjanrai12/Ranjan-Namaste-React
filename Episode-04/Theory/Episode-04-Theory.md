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

A: Need To Update

## Q: Q: What is `React Fiber`?

A: Need To Update

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

A: Need To Cover
