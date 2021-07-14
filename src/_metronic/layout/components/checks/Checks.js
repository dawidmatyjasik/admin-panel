import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../content/ContentRoute";
import Basic from "../projects/basic/Basic";

const Checks = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute
          path="/edytuj/dane-projektowe/podstawowe"
          component={Basic}
        />
      </Switch>
    </>
  );
};

export default Checks;
