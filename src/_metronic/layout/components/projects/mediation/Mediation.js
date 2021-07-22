import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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

const data = { mediation: ["Pośrednik 1", "Pośrednik 2", "Pośrednik 3"] };

const Mediation = () => {
  const [posrednictwo, setPosrednictwo] = useState([]);
  const [dataZakonczeniaSzkolenia, setDataZakonczeniaSzkolenia] = useState("");
  const [posrednik, setPosrednik] = useState("");
  const [adresPosrednictwa, setAdresPosrednictwa] = useState("");
  const [dataSpotkania, setDataSpotkania] = useState("");
  const [godzinySpotkaniaOd, setGodzinySpotkaniaOd] = useState("");
  const [godzinySpotkaniaDo, setGodzinySpotkaniaDo] = useState("");
  const [czasTrwania, setCzasTrwania] = useState("");
  const [uwagi, setUwagi] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("posrednictwo")
      .set({
        dataZakonczeniaSzkolenia,
        posrednik,
        adresPosrednictwa,
        dataSpotkania,
        godzinySpotkaniaOd,
        godzinySpotkaniaDo,
        czasTrwania,
        uwagi,
      });
    console.log("dodano");
  };

  useEffect(() => {
    if (posrednictwo) {
      setDataZakonczeniaSzkolenia(posrednictwo.dataZakonczeniaSzkolenia || "");
      setPosrednik(posrednictwo.posrednik || "");
      setAdresPosrednictwa(posrednictwo.adresPosrednictwa || "");
      setDataSpotkania(posrednictwo.dataSpotkania || "");
      setGodzinySpotkaniaOd(posrednictwo.godzinySpotkaniaOd || "");
      setGodzinySpotkaniaDo(posrednictwo.godzinySpotkaniaDo || "");
      setCzasTrwania(posrednictwo.czasTrwania || "");
      setUwagi(posrednictwo.uwagi || "");
    }
  }, [posrednictwo]);

  const classes = useStyles();
  return (
    <Form>
      <FormHeader>Sesja I</FormHeader>
      <FormLabel>
        Data zakończenia szkoleina:
        <FormInput
          value={dataZakonczeniaSzkolenia}
          onChange={(e) => setDataZakonczeniaSzkolenia(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Pośrednik pracy:
        <FormSelect
          value={posrednik}
          onChange={(e) => setPosrednik(e.target.value)}
        >
          {data.mediation.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Pełny adress miejsca pośrednictwa:
        <FormInput
          value={adresPosrednictwa}
          onChange={(e) => setAdresPosrednictwa(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Data spotkania:
        <FormInput
          value={dataSpotkania}
          onChange={(e) => setDataSpotkania(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Godziny spotkania:
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput
              value={godzinySpotkaniaOd}
              onChange={(e) => setGodzinySpotkaniaOd(e.target.value)}
              type="time"
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
          value={czasTrwania}
          onChange={(e) => setCzasTrwania(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Uwagi*:
        <FormInput
          value={uwagi}
          onChange={(e) => setUwagi(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormFlexContainer>
        <Button variant="outlined" className={classes.button}>
          Dodaj sesję pośrednictwa
        </Button>
        <Button
          type="submit"
          variant="outlined"
          onClick={handleSubmit}
          className={classes.button}
        >
          Zapisz
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Mediation;
