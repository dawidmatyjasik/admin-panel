import React from "react";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../../_metronic/layout";
import Cadre from "../../_metronic/layout/components/cadre/Cadre";
import Nav from "../../_metronic/layout/components/cadre/Nav";

const CadrePage = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/panel/kadra">
          <Cadre />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default CadrePage;
