import React, { useEffect } from "react";
import { BasicContainer } from "../ProjectsElements";
import List from "./List";
import Inputs from "./Inputs";
import db from "../../../../../firebase";
import { useState } from "react";

const Basic = () => {
  const [podstawowe, setPodstawowe] = useState([]);
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

  return (
    <BasicContainer>
      <List />
      <Inputs podstawowe={podstawowe} />
    </BasicContainer>
  );
};

export default Basic;
