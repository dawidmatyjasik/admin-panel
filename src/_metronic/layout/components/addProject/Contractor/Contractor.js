import React from "react";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../../content/ContentRoute";
import Catering from "./catering/Catering";
import Consulting from "./consulting/Consulting";
import Nav from "./Nav";
import Training from "./training/Training";
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
          <Training />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default Contractor;
