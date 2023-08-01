import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import useLogo from "./user-logo.jpg";

//Q1:  Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
// const header = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", { id: "heading1" }, "this is heading 1"),
//   React.createElement("h2", { id: "heading2" }, "this is heading 2"),
//   React.createElement("h3", { id: "heading2" }, "this is heading 3"),
// ]);

// Create the same element using JSX.
// const header = (
//   <div className="title">
//     <h1 id="heading1">this is heading 1</h1>
//     <h2 id="heading2">this is heading 2</h2>
//     <h3 id="heading3">this is heading 3</h3>
//   </div>
// );

//Q:  Create a `functional component of the same with JSX`
// const Header = () => (
//   <div className="title">
//     <h1 id="heading1">this is heading 1</h1>
//     <h2 id="heading2">this is heading 2</h2>
//     <h3 id="heading3">this is heading 3</h3>
//   </div>
// );

// Q: `Pass attribute` into the tag in `JSX`.
// const Header = () => {
//   return (
//     <div className="title">
//       <h1 id="heading1" style={{ color: "blue" }}>
//         this is heading 1
//       </h1>
//       <h2 id="heading2" style={{ color: "lightblue" }}>
//         this is heading 2
//       </h2>
//       <h3 id="heading3" style={{ color: "cyan" }}>
//         this is heading 3
//       </h3>
//     </div>
//   );
// };

// Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
// const TitleComponent = () => {
//   return <h3>Namaste React</h3>;
// };

// Q: `Composition of Component` (Add a component inside another)
// const Header = () => (
//   <div>
//     <h1>This is Heading 1</h1>
//     {TitleComponent()} <TitleComponent />
//     <TitleComponent></TitleComponent>
//   </div>
// );

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
const Container = () => (
  <div id="container">
    <Header></Header>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
