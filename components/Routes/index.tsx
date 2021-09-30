import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import ROUTES from "../../config/routes";

import LoginPage from "../../src/pages/Login";
import RegisterPage from "../../src/pages/Register";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTES.USER_ROUTES.LOGIN} exact component={LoginPage} />
        <Route path={ROUTES.USER_ROUTES.REGISTER} component={RegisterPage} />
        {/* <Route path={ROUTES.USER_ROUTES.PROJECTS} component={} /> */}
        <Redirect path="*" to={ROUTES.USER_ROUTES.LOGIN} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
