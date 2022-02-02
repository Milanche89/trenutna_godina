//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";

//var React = require("react");
//var ReactDom = require("react-dom");

const fname = "Milan";
const lname = "Savic";
const broj = Math.floor(Math.random() * 10);

ReactDom.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your lucky number is {broj}</p>
  </div>,

  document.getElementById("root")
);
