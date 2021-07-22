import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import db from "../../../../../firebase";
import {
  Form,
  FormDateContainer,
  FormFlexContainer,
  FormHeader,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
  FormSpan,
  FromDateWrapper,
} from "../ProjectsElements";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "1%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    "&:nth-child(1)": {
      marginRight: "2%",
    },
    "@media (max-width: 1000px)": {
      width: "30%",
    },
    "@media (max-width: 500px)": {
      width: "35%",
    },
  },
}));

const data = { consulting: ["Doradca 1", "Doradca 2", "Doradca 3"] };

const Consulting = () => {
  const [doradztwo, setDoradztwo] = useState([]);
  const [wyksztalcenie, setWyksztalcenie] = useState("");
  const [adresDoradztwa, setAdresDoradztwa] = useState("");
  const [dataSpotkania, setDataSpotkania] = useState("");
  const [godzinySpotkaniaOd, setGodzinySpotkaniaOd] = useState("");
  const [godzinySpotkaniaDo, setGodzinySpotkaniaDo] = useState("");
  const [czasTrwania, setCzasTrwania] = useState("");
  const classes = useStyles();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("doradztwo")
      .set({
        wyksztalcenie,
        adresDoradztwa,
        dataSpotkania,
        godzinySpotkaniaOd,
        godzinySpotkaniaDo,
        czasTrwania,
      });
    console.log("dodano");
  };

  useEffect(() => {
    if (doradztwo) {
      setWyksztalcenie(doradztwo.wyksztalcenie || "");
      setAdresDoradztwa(doradztwo.adresDoradztwa || "");
      setDataSpotkania(doradztwo.dataSpotkania || "");
      setGodzinySpotkaniaOd(doradztwo.godzinySpotkaniaOd || "");
      setGodzinySpotkaniaDo(doradztwo.godzinySpotkaniaDo || "");
      setCzasTrwania(doradztwo.czasTrwania || "");
    }
  }, [doradztwo]);

  return (
    <Form>
      <FormHeader>Sesja I</FormHeader>
      <FormLabel>
        Wykształecnie deklarowane w projekcie:
        <FormSelect
          value={wyksztalcenie}
          onChange={(e) => setWyksztalcenie(e.target.value)}
        >
          {data.consulting.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Pełny adres miejsca doradztwa:
        <FormInput
          value={adresDoradztwa}
          onChange={(e) => setAdresDoradztwa(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Data spotkania:
        <FormInput
          type="date"
          value={dataSpotkania}
          onChange={(e) => setDataSpotkania(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Godziny spotkania:
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput
              type="time"
              value={godzinySpotkaniaOd}
              onChange={(e) => setGodzinySpotkaniaOd(e.target.value)}
            ></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput
              value={godzinySpotkaniaDo}
              onChange={(e) => setGodzinySpotkaniaDo(e.target.value)}
              type="time"
            ></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Czas trwania spotkania:
        <FormInput
          type="number"
          value={czasTrwania}
          onChange={(e) => setCzasTrwania(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormFlexContainer>
        <Button variant="outlined" className={classes.button}>
          Dodaj kolejną sesję
        </Button>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="outlined"
          className={classes.button}
        >
          Zapisz
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Consulting;
