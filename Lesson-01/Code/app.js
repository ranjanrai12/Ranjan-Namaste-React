// const heading = document.createElement("h1");
//   heading.innerHTML = "Hello World From JS.";
//   const root = document.getElementById("root");
//   root.append(heading);

/* In createElement method first attribute is name of tag 2nd is attribute and 3rd is children*/

/* 
  <div id="parent">
    <div id="child1">
      <h1>I'm h1 Tag</h1>
      <h2>I'm h2 Tag</h2>
    </div>
    <div id="child2">
      <h1>I'm h1 Tag</h1>
      <h2>I'm h2 Tag</h2>
    </div>
  </div>

**/
const container = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 Tag from child 1"),
    React.createElement("h2", {}, "I am h2 Tag from child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 Tag from child2"),
    React.createElement("h2", {}, "I am h2 Tag from child2"),
  ]),
]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "xyz" },
//   "Hello World From React!"
// );
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
