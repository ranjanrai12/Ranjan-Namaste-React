import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => ReactElement(JS Object) => HtmlElement(Render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);

//JSX => Babel transpiles to React.createElement => ReactElement(JS Object) => HtmlElement(Render)
const title = <h1>Namaste React By JSX!</h1>;
// console.log(jsxHeading);

const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
