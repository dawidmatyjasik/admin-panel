import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import db from "../../../../../../firebase";
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
} from "../../../projects/ProjectsElements";

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

const Catering = () => {
  const classes = useStyles();
  const [catering, setCatering] = useState([]);
  const [nazwaFirmy, setNazwaFirmy] = useState("");
  const [kodPocztowy, setKodPocztowy] = useState("");
  const [miasto, setMiasto] = useState("");
  const [ulica, setUlica] = useState("");
  const [numerDomu, setNumerDomu] = useState("");
  const [numerUmowy, setNumerUmowy] = useState("");
  const [dataUmowyOd, setDataUmowyOd] = useState("");
  const [dataUmowyDo, setDataUmowyDo] = useState("");

  useEffect(() => {
    db.collection("projects")
      .doc(`projekt`)
      .collection("wykonawcy")
      .doc("catering")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setCatering(doc.data());
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
    db.collection("projects")
      .doc(`projekt`)
      .collection("wykonawcy")
      .doc("catering")
      .set({
        nazwaFirmy,
        kodPocztowy,
        miasto,
        ulica,
        numerDomu,
        numerUmowy,
        dataUmowyOd,
        dataUmowyDo,
      });
    console.log("dodano");
  };

  useEffect(() => {
    if (catering) {
      setNazwaFirmy(catering.nazwaFirmy || "");
      setKodPocztowy(catering.kodPocztowy || "");
      setMiasto(catering.miasto || "");
      setUlica(catering.ulica || "");
      setNumerDomu(catering.numerDomu || "");
      setNumerUmowy(catering.numerUmowy || "");
      setDataUmowyOd(catering.dataUmowyOd || "");
      setDataUmowyDo(catering.dataUmowyDo || "");
    }
  }, [catering]);

  return (
    <Form>
      <FormHeader>Wykonawca cateringu:</FormHeader>
      <FormLabel>
        Nazwa firmy:
        <FormInput
          value={nazwaFirmy}
          onChange={(e) => setNazwaFirmy(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy:
        <FormInput
          value={kodPocztowy}
          onChange={(e) => setKodPocztowy(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput
          value={miasto}
          onChange={(e) => setMiasto(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica
        <FormInput
          value={ulica}
          onChange={(e) => setUlica(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Numer
        <FormInput
          value={numerDomu}
          onChange={(e) => setNumerDomu(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Numer umowy:
        <FormInput
          value={numerUmowy}
          onChange={(e) => setNumerUmowy(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Data umowy:
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput
              value={dataUmowyOd}
              onChange={(e) => setDataUmowyOd(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput
              value={dataUmowyDo}
              onChange={(e) => setDataUmowyDo(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>

      <Button
        onClick={handleSubmit}
        type="submit"
        variant="outlined"
        className={classes.button}
      >
        Zapisz
      </Button>
    </Form>
  );
};

export default Catering;
