import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement=>ReactElement-JS object => html element
const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "This is Namaste React 🚀"),
      React.createElement("h2", {}, "I am h2 heading"),
    ]),
    ,
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am h1 heading"),
      React.createElement("h2", {}, "I am h2 heading"),
    ]),
  ]
);

// react element
// JSX =>babel trsnspiles it to React.createElement=>ReactElement-JS object =>html element
const JSXHeading = <h1 id="heading">Hello from jsx</h1>;
const heading = () => {
  <h1 id="heading">Hello from jsx</h1>;
};

// react component

const Title = () => {
  return <h1 id="heading">Functional component</h1>;
};

const Title1 = function () {
  return (
   <h1 id="heading">Functional1 component</h1>
)
};


// component composition
const HeadingComponent = () => {

  return <>
    {JSXHeading}
    <Title />
    {/* {Title()}
    <Title></Title> */}
    {/* same as <Title /> */}
    <Title1/>
  <h1 id="heading">Hello from functional component</h1>
  </>
};

console.log(JSXHeading);
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXHeading); //convert heading object into h1 tag and put it in a DOM
root.render(<HeadingComponent />); //convert heading object into h1 tag and put it in a DOM