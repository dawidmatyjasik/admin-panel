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
      .doc("podstawowe")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setPodstawowe(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("doradztwo")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDoradztwo(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("szkolenie")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setSzkolenie(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("posrednictwo")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setPosrednictwo(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("staz")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setStaz(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("zatrudnienie")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setZatrudnienie(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("udzial")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUdzial(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
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
