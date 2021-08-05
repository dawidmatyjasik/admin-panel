import React from "react";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../../_metronic/layout";
import Basic from "../../_metronic/layout/components/addProject/Basic/Basic";
import Contractor from "../../_metronic/layout/components/addProject/Contractor/Contractor";
import Nav from "../../_metronic/layout/components/addProject/Nav";

const ProjectsPage = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/panel/dodaj/projekt/dane-podstawowe" exact>
          <Basic />
        </ContentRoute>
        <ContentRoute path="/panel/dodaj/projekt/wykonawcy">
          <Contractor />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default ProjectsPage;
