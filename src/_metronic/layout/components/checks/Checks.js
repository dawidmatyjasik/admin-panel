import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../content/ContentRoute";
import Training from "./training/Training";

const Checks = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/edytuj/kontrola/szkolenia" component={Training} />
      </Switch>
    </>
  );
};

export default Checks;
