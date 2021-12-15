import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../content/ContentRoute";
import Training from "./training/Training";
import Internship from "./internship/Internship";
import Content from "./Content";
import Search from "./Search";

const Checks = () => {
  return (
    <>
      <Nav />
      <Search />

      <Switch>
        <ContentRoute
          path="/panel/edytuj/kontrole/szkolenie"
          component={Content}
        />
        <ContentRoute path="/panel/edytuj/kontrole/staz" component={Content} />
        <ContentRoute
          path="/panel/edytuj/kontrole/szkolenie-dojazd"
          component={Content}
        />
        <ContentRoute
          path="/panel/edytuj/kontrole/staz-dojazd"
          component={Content}
        />
        <ContentRoute
          path="/panel/edytuj/kontrole/szkolenie-opieka"
          component={Content}
        />
        <ContentRoute
          path="/panel/edytuj/kontrole/staz-opieka"
          component={Content}
        />
      </Switch>
    </>
  );
};

export default Checks;
