import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const toRender = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(toRender, document.getElementById("root"));
