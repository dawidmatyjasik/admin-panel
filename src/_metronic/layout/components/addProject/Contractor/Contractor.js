import React from "react";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../../content/ContentRoute";
import Consulting from "../../projects/consulting/Consulting";
import Nav from "./Nav";
const Contractor = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/panel/edytuj/dane-projektowe/doradztwo">
          <Consulting />
        </ContentRoute>
        <ContentRoute path="/panel/edytuj/dane-projektowe/doradztwo">
          <Consulting />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default Contractor;
