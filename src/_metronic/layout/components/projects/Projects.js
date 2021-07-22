import React, { useEffect, useState } from "react";
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
import Employment from "./employment/Employment";
import Termination from "./termination/Termination";
import db from "../../../../firebase";
const Projects = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/edytuj/dane-projektowe/podstawowe">
          <Basic />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/doradztwo">
          <Consulting />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/szkolenie">
          <Training />
        </ContentRoute>

        <ContentRoute path="/edytuj/dane-projektowe/posrednictwo">
          <Mediation />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/staz">
          <Internship />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/zatrudnienie">
          <Employment />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/udzial">
          <Termination />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default Projects;
