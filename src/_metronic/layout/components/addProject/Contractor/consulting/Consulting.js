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

const Consulting = () => {
  const classes = useStyles();
  const [doradztwo, setDoradztwo] = useState([]);
  const [nazwaFirmyDoradztwa, setNazwaFirmyDoradztwa] = useState("");
  const [kodPocztowyDoradztwa, setKodPocztowyDoradztwa] = useState("");
  const [miastoDoradztwa, setMiastoDoradztwa] = useState("");
  const [ulicaDoradztwa, setUlicaDoradztwa] = useState("");
  const [numerDoradztwa, setNumerDoradztwa] = useState("");
  const [konsorcjant, setKonsorcjant] = useState("");
  const [nazwaFirmyKonsorcjantu, setNazwaFirmyKonsorcjantu] = useState("");
  const [kodPocztowyKonsorcjantu, setKodPocztowyKonsorcjantu] = useState("");
  const [miastoKonsorcjantu, setMiastoKonsorcjantu] = useState("");
  const [ulicaKonsorcjantu, setUlicaKonsorcjantu] = useState("");
  const [numerKonsorcjantu, setNumerKonsorcjantu] = useState("");
  const [numerUmowy, setNumerUmowy] = useState("");
  const [dataUmowyOd, setDataUmowyOd] = useState("");
  const [dataUmowyDo, setdDtaUmowyDo] = useState("");
  const [umowaPowierzaniaDanych, setUmowaPowierzaniaDanych] = useState("");
  const [umowaZgloszonaWup, setUmowaZgloszonaWup] = useState("");
  const [dataZgloszeniaWup, setDataZgloszeniaWup] = useState("");

  useEffect(() => {
    db.collection("projects")
      .doc(`projekt`)
      .collection("wykonawcy")
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
    db.collection("projects")
      .doc(`projekt`)
      .collection("wykonawcy")
      .doc("doradztwo")
      .set({
        nazwaFirmyDoradztwa,
        kodPocztowyDoradztwa,
        miastoDoradztwa,
        ulicaDoradztwa,
        numerDoradztwa,
        konsorcjant,
        nazwaFirmyKonsorcjantu,
        kodPocztowyKonsorcjantu,
        miastoKonsorcjantu,
        ulicaKonsorcjantu,
        numerKonsorcjantu,
        numerUmowy,
        dataUmowyOd,
        dataUmowyDo,
        umowaPowierzaniaDanych,
        umowaZgloszonaWup,
        dataZgloszeniaWup,
      });
    console.log("dodano");
  };
  useEffect(() => {
    if (doradztwo) {
      setNazwaFirmyDoradztwa(doradztwo.nazwaFirmyDoradztwa || "");
      setKodPocztowyDoradztwa(doradztwo.kodPocztowyDoradztwa || "");
      setMiastoDoradztwa(doradztwo.miastoDoradztwa || "");
      setUlicaDoradztwa(doradztwo.ulicaDoradztwa || "");
      setNumerDoradztwa(doradztwo.numerDoradztwa || "");
      setKonsorcjant(doradztwo.konsorcjant || "");
      setNazwaFirmyKonsorcjantu(doradztwo.nazwaFirmyKonsorcjantu || "");
      setKodPocztowyKonsorcjantu(doradztwo.kodPocztowyKonsorcjantu || "");
      setMiastoKonsorcjantu(doradztwo.miastoKonsorcjantu || "");
      setUlicaKonsorcjantu(doradztwo.ulicaKonsorcjantu || "");
      setNumerKonsorcjantu(doradztwo.numerKonsorcjantu || "");
      setNumerUmowy(doradztwo.numerUmowy || "");
      setDataUmowyOd(doradztwo.dataUmowyOd || "");
      setdDtaUmowyDo(doradztwo.dataUmowyDo || "");
      setUmowaPowierzaniaDanych(doradztwo.umowaPowierzaniaDanych || "");
      setUmowaZgloszonaWup(doradztwo.umowaZgloszonaWup || "");
      setDataZgloszeniaWup(doradztwo.dataZgloszeniaWup || "");
    }
  }, [doradztwo]);

  return (
    <Form>
      <FormHeader>Wykonawca doradztwa i pośrednictwa pracy:</FormHeader>
      <FormLabel>
        Nazwa firmy:
        <FormInput
          value={nazwaFirmyDoradztwa}
          onChange={(e) => setNazwaFirmyDoradztwa(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy:
        <FormInput
          value={kodPocztowyDoradztwa}
          onChange={(e) => setKodPocztowyDoradztwa(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput
          value={miastoDoradztwa}
          onChange={(e) => setMiastoDoradztwa(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica
        <FormInput
          value={ulicaDoradztwa}
          onChange={(e) => setUlicaDoradztwa(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Numer
        <FormInput
          value={numerDoradztwa}
          onChange={(e) => setNumerDoradztwa(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Konsorcjant
        <FormSelect
          value={konsorcjant}
          onChange={(e) => setKonsorcjant(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      {konsorcjant === "Tak" ? (
        <>
          {" "}
          <FormLabel>
            Nazwa firmy:
            <FormInput
              value={nazwaFirmyKonsorcjantu}
              onChange={(e) => setNazwaFirmyKonsorcjantu(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Kod pocztowy:
            <FormInput
              value={kodPocztowyKonsorcjantu}
              onChange={(e) => setKodPocztowyKonsorcjantu(e.target.value)}
              type="number"
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Miasto:
            <FormInput
              value={miastoKonsorcjantu}
              onChange={(e) => setMiastoKonsorcjantu(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Ulica:
            <FormInput
              value={ulicaKonsorcjantu}
              onChange={(e) => setUlicaKonsorcjantu(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Numer domu:
            <FormInput
              value={numerKonsorcjantu}
              onChange={(e) => setNumerKonsorcjantu(e.target.value)}
              type="number"
            ></FormInput>
          </FormLabel>{" "}
        </>
      ) : (
        <></>
      )}
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
              onChange={(e) => setdDtaUmowyDo(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Umowa powierzania danych:
        <FormSelect
          value={umowaPowierzaniaDanych}
          onChange={(e) => setUmowaPowierzaniaDanych(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Umowa zgłoszona do WUP:
        <FormSelect
          value={umowaZgloszonaWup}
          onChange={(e) => setUmowaZgloszonaWup(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Data zgłoszenia:
        <FormInput
          value={dataZgloszeniaWup}
          onChange={(e) => setDataZgloszeniaWup(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <Button
        type="submit"
        onClick={handleSubmit}
        variant="outlined"
        className={classes.button}
      >
        Dodaj projekt
      </Button>
    </Form>
  );
};

export default Consulting;
