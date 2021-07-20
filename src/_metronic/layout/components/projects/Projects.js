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
  const [podstawowe, setPodstawowe] = useState([]);
  const [doradztwo, setDoradztwo] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
    );
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .onSnapshot((snapshot) =>
        setPodstawowe(
          snapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        )
      );
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .onSnapshot((snapshot) =>
        setDoradztwo(
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
          <Basic podstawowe={podstawowe} />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/doradztwo">
          <Consulting doradztwo={doradztwo} />
        </ContentRoute>
        <ContentRoute
          path="/edytuj/dane-projektowe/szkolenie"
          component={Training}
        />
        <ContentRoute
          path="/edytuj/dane-projektowe/posrednictwo"
          component={Mediation}
        />
        <ContentRoute
          path="/edytuj/dane-projektowe/staz"
          component={Internship}
        />
        <ContentRoute
          path="/edytuj/dane-projektowe/zatrudnienie"
          component={Employment}
        />
        <ContentRoute
          path="/edytuj/dane-projektowe/udzial"
          component={Termination}
        />
      </Switch>
    </>
  );
};

export default Projects;
