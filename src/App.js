import React from "react";
import "./style.css";

export default function App(props) {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{props.date.toLocaleTimeString()}</p>
    </div>
  );
}
