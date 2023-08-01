## Namaste React Course by Akshay Saini

# Chapter 03 - Laying the Foundation Coding Assignment

## Q: Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

```
const header = React.createElement("div", { className: "title" }, [
React.createElement("h1", { id: "heading1" }, "this is heading 1"),
React.createElement("h2", { id: "heading2" }, "this is heading 2"),
 React.createElement("h3", { id: "heading3" }, "this is heading 3"),
]);
```

## Q: Create the same element using JSX.

```
const header = (
  <div className="title">
    <h1 id="heading1">this is heading 1</h1>
    <h2 id="heading2">this is heading 2</h2>
    <h3 id="heading3">this is heading 3</h3>
  </div>
);
```

## Create a functional component of the same with `JSX`.

```
const Header = () => (
  <div className="title">
    <h1 id="heading1">this is heading 1</h1>
    <h2 id="heading2">this is heading 2</h2>
    <h3 id="heading3">this is heading 3</h3>
  </div>
);

```

## `Pass attribute` into the tag in `JSX`.

```
const Header = () => {
  return (
    <div className="title">
      <h1 id="heading1" style={{ color: "blue" }}>
        this is heading 1
      </h1>
      <h2 id="heading2" style={{ color: "lightblue" }}>
        this is heading 2
      </h2>
      <h3 id="heading3" style={{ color: "cyan" }}>
        this is heading 3
      </h3>
    </div>
  );
};

```

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

```
const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component

const Header = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */}
      {element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      <TitleElement/>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};
```

## ## Q: Create a `Header Component from scratch` using `Functional Component with JSX`

```
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="brand-logo" />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Type to search.."></input>
      </div>
      <div className="userLogo">
        <img src={useLogo} />
      </div>
    </div>
  );
};

```
