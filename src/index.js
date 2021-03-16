import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

import "./Resources/css/app.css";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
