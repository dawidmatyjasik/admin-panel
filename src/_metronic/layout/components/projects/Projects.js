import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
// import { ContentRoute } from "../../_metronic/layout";
// import { ContentRoute } from "../../../_metronic/layout";
import { ContentRoute } from "../../../layout";
import Basic from "./basic/Basic";
import Consulting from "./consulting/Consulting";
import Training from "./training/Traning";
import Mediation from "./mediation/Mediation";
import Internship from "./internship/Internship";
const Projects = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute
          path="/edytuj/dane-projektowe/podstawowe"
          component={Basic}
        />
        <ContentRoute
          path="/edytuj/dane-projektowe/doradztwo"
          component={Consulting}
        />
        <ContentRoute
          path="/edytuj/dane-projektowe/szkolenie"
          component={Training}
        />
        <ContentRoute
          path="/edytuj/dane-projektowe/posrednictwo"
          component={Mediation}
        />
        <ContentRoute
          path="/edytuj/dane-projektowe/staz"
          component={Internship}
        />
      </Switch>
    </>
  );
};

export default Projects;
