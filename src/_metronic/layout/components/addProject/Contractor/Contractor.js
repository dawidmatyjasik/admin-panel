import React from "react";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../../content/ContentRoute";
import Catering from "./catering/Catering";
import Consulting from "./consulting/Consulting";
import Nav from "./Nav";
const Contractor = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/panel/dodaj/projekt/wykonawcy/doradztwo">
          <Consulting />
        </ContentRoute>
        <ContentRoute path="/panel/dodaj/projekt/wykonawcy/catering">
          <Catering />
        </ContentRoute>
        <ContentRoute path="/panel/dodaj/projekt/wykonawcy/szkolenia">
          <Consulting />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default Contractor;
