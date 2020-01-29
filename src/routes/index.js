import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Prime from "../pages/Prime";

export default props => (
  <HashRouter>
      <Switch>
        <Route exact path="/" component={Prime} />
      </Switch>
  </HashRouter>
);
