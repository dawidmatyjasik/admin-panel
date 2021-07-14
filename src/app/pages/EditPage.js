import React from "react";
import { useSubheader } from "../../_metronic/layout";
import Nav from "../../_metronic/layout/components/edit/Nav";
import Personal from "../../_metronic/layout/components/personal/Personal";
import Projects from "../../_metronic/layout/components/projects/Projects";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../_metronic/layout";
import Checks from "../../_metronic/layout/components/checks/Checks";

export const EditPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Mój profil");

  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/edytuj/dane-osobowe" component={Personal} />
        {
          <Redirect
            exact
            from="/edytuj/dane-projektowe"
            to="/edytuj/dane-projektowe/podstawowe"
          />
        }
        <ContentRoute path="/edytuj/dane-projektowe" component={Projects} />
        {
          <Redirect
            exact
            from="/edytuj/kontrola"
            to="/edytuj/kontrola/szkolenia"
          />
        }
        <ContentRoute path="/edytuj/kontrola" component={Checks} />
      </Switch>
    </>
  );
};
