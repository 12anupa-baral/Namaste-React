import React from "react";
import ReactDOM from "react-dom/client"; 
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
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //convert heading object into h1 tag and put it in a DOM
