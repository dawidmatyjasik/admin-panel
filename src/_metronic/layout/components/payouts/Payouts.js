import React from "react";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../content/ContentRoute";
import Consulting from "../projects/consulting/Consulting";
import NavInternship from "./internship/Nav";
import NavTraining from "./training/Nav";
const Payouts = () => {
  return (
    <>
      <Switch>
        <ContentRoute path="/panel/wyplaty/szkolenie">
          <NavTraining />
          <Consulting />
        </ContentRoute>
        <ContentRoute path="/panel/wyplaty/staz">
          <NavInternship />
          <Consulting />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default Payouts;
