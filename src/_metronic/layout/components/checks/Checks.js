import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../content/ContentRoute";
import Training from "./training/Training";
import Internship from "./internship/Internship";

const Checks = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute
          path="/panel/edytuj/kontrole/szkolenie"
          component={Training}
        />
        <ContentRoute
          path="/panel/edytuj/kontrole/staz"
          component={Internship}
        />
        <ContentRoute
          path="/panel/edytuj/kontrole/szkolenie-dojazd"
          component={Internship}
        />
        <ContentRoute
          path="/panel/edytuj/kontrole/staz-dojazd"
          component={Internship}
        />
        <ContentRoute
          path="/panel/edytuj/kontrole/szkolenie-opieka"
          component={Internship}
        />
        <ContentRoute
          path="/panel/edytuj/kontrole/staz-opieka"
          component={Internship}
        />
      </Switch>
    </>
  );
};

export default Checks;
