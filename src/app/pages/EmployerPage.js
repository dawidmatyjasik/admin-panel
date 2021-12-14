import React from "react";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../../_metronic/layout";
import Employer from "../../_metronic/layout/components/employer/Employer";
import Nav from "../../_metronic/layout/components/employer/Nav";

const EmployerPage = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/panel/pracodawca">
          <Employer />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default EmployerPage;
