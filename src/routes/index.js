import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Prime from "../pages/Prime";

export default props => (
  <HashRouter>
      <Switch>
        <Route exact path="/" component={Prime} />
        {/* <Route exact path="/search" component={Search} />
        <Route exact path="/wizard" component={Wizard} /> */}
      </Switch>
  </HashRouter>
);
