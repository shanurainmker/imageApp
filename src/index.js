import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
