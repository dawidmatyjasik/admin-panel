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
  const [szkolenie, setSzkolenie] = useState([]);
  const [posrednictwo, setPosrednictwo] = useState([]);
  const [staz, setStaz] = useState([]);
  const [zatrudnienie, setZatrudnienie] = useState([]);
  const [udzial, setUdzial] = useState([]);
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

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .onSnapshot((snapshot) =>
        setSzkolenie(
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
        setPosrednictwo(
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
        setStaz(
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
        setZatrudnienie(
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
        setUdzial(
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
        <ContentRoute path="/edytuj/dane-projektowe/szkolenie">
          <Training szkolenie={szkolenie} />
        </ContentRoute>

        <ContentRoute path="/edytuj/dane-projektowe/posrednictwo">
          <Mediation posrednictwo={posrednictwo} />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/staz">
          <Internship staz={staz} />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/zatrudnienie">
          <Employment zatrudnienie={zatrudnienie} />
        </ContentRoute>
        <ContentRoute path="/edytuj/dane-projektowe/udzial">
          <Termination udzial={udzial} />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default Projects;
