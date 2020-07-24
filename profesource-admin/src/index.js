import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from "views/Dashboard.js";
import Diagrams from "views/Diagrams.js";
import Users from "views/Users.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><Dashboard></Dashboard></Route>
      <Route path="/diagrams" ><Diagrams></Diagrams></Route>
      <Route path="/users"><Users></Users></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
