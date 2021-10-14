import React from "react";
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from "react-router-dom";
import ROUTES from "../../config/routes";

import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";
import Dashboard from "../../pages/Dashboard";
import Projects from "../../pages/Projects";

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTES.USER_ROUTES.LOGIN} exact component={LoginPage} />
        <Route path={ROUTES.USER_ROUTES.REGISTER} exact component={RegisterPage} />
        <Route path={ROUTES.USER_ROUTES.DASHBOARD} exact component={Dashboard} />
        <Route path={ROUTES.USER_ROUTES.PROJECTS} exact component={Projects} />
        <Redirect path="*" to={ROUTES.USER_ROUTES.LOGIN} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
