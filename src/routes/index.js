import React from "react";
import { Switch } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

import Route from "./Route";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} isPrivate />
    </Switch>
  );
}
