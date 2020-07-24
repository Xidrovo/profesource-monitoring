import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from "views/Dashboard.js";
import Diagrams from "views/Diagrams.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><Dashboard></Dashboard></Route>
      <Route path="/diagrams" ><Diagrams></Diagrams></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
