import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
function performAction() {
  ReactDOM.render(<App date={new Date()} />, document.getElementById("root"));
}
setInterval(performAction, 1000);
