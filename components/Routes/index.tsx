import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTES.USER_ROUTES.HOME} exact component={HomePage} />
        <Route
          path={ROUTES.USER_ROUTES.APPOINTMENT_TITLE}
          component={AppointmentTitle}
        />
        <Redirect path="*" to={ROUTES.USER_ROUTES.HOME} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
