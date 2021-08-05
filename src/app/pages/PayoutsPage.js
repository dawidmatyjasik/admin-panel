import React from "react";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../../_metronic/layout";
import Nav from "../../_metronic/layout/components/payouts/Nav";
import Payouts from "../../_metronic/layout/components/payouts/Payouts";

const PayoutsPage = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/panel/wyplaty">
          <Payouts />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default PayoutsPage;
