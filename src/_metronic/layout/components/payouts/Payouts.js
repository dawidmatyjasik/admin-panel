import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../content/ContentRoute";
import Consulting from "../projects/consulting/Consulting";
import NavInternship from "./internship/Nav";
import NavTraining from "./training/Nav";
const Payouts = () => {
  return (
    <>
      <Switch>
        {
          <Redirect
            exact
            from="/panel/wyplaty/szkolenie"
            to="/panel/wyplaty/szkolenie/lista-plac"
          />
        }
        <ContentRoute path="/panel/wyplaty/szkolenie">
          <NavTraining />
          <Consulting />
        </ContentRoute>
        {
          <Redirect
            exact
            from="/panel/wyplaty/staz"
            to="/panel/wyplaty/staz/lista-plac"
          />
        }
        <ContentRoute path="/panel/wyplaty/staz">
          <NavInternship />
          <Consulting />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default Payouts;
