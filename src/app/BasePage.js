import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { EditPage } from "./pages/EditPage";
import { DashboardPage } from "./pages/DashboardPage";

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        {<Redirect exact from="/edytuj" to="/edytuj/dane-osobowe" />}
        <ContentRoute path="/edytuj" component={EditPage} />
      </Switch>
    </Suspense>
  );
}
