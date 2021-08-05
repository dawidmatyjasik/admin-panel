import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../content/ContentRoute";
import Internship from "./internship/Internship";
import NavInternship from "./internship/Nav";
import NavTraining from "./training/Nav";
import Training from "./training/Training";
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
          <Training />
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
          <Internship />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default Payouts;
