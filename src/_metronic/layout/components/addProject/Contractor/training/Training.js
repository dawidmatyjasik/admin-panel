import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
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

const data = {
  trener: ["Trener1", "Trener2", "Trener3", "Trener4"],
  egzaminator: ["Egzaminator1", "Egzaminator2", "Egzaminator3"],
};

const Training = () => {
  const classes = useStyles();
  const [szkolenie, setPosrednictwo] = useState([]);
  const [nazwaSzkolenia, setDataZakonczeniaSzkolenia] = useState("");
  const [numerGrupy, setnumerGrupy] = useState("");

  const [nazwaFrimySzkolenia, setNazwaFrimySzkolenia] = useState("");
  const [kodPocztowySzkolenia, setKodPocztowySzkolenia] = useState("");
  const [miastoSzkolenia, setMiastoSzkolenia] = useState("");
  const [ulicaSzkolenia, setUlicaSzkolenia] = useState("");
  const [numerMieszkaniaSzkolenia, setNumerMieszkaniaSzkolenia] = useState("");
  const [numerUmowySzkolenia, setNumerUmowySzkolenia] = useState("");
  const [dataUmowySzkolenia, setDataUmowySzkolenia] = useState("");
  const [umowaPowierdzaniaDanych, setUmowaPowierdzaniaDanych] = useState("");
  const [umowaZgloszonaWup, setUmowaZgloszonaWup] = useState("");
  const [dataZgloszenia, setDataZgloszenia] = useState("");

  const [nazwaFrimyPodwykonawcy, setNazwaFrimyPodwykonawcy] = useState("");
  const [kodPocztowyPodwykonawcy, setKodPocztowyPodwykonawcy] = useState("");
  const [miastoPodwykonawcy, setMiastoPodwykonawcy] = useState("");
  const [ulicaPodwykonawcy, setUlicaPodwykonawcy] = useState("");
  const [
    numerMieszkaniaPodwykonawcy,
    setNumerMieszkaniaPodwykonawcy,
  ] = useState("");

  const [trener, setTrener] = useState("");
  const [egzaminator, setEgzaminator] = useState("");
  const [terminSzkoleniaOd, setTerminSzkoleniaOd] = useState("");
  const [terminSzkoleniaDo, setTerminSzkoleniaDo] = useState("");
  const [rekomendacje, setRekomendacje] = useState("");
  return (
    <Form>
      <FormLabel>
        Nazwa szkolenia:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer grupy:
        <FormInput></FormInput>
      </FormLabel>
      <FormHeader>Wykonawca szkolenia:</FormHeader>
      <FormLabel>
        Nazwa firmy:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer mieszkania:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Numer umowy:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Data umowy:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Umowa powierzania danych:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Umowa zgłoszona do WUP:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Data zgłoszenia:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormHeader>Podwykonawca szkolenia:</FormHeader>
      <FormLabel>
        Nazwa firmy:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer mieszkania:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Dodaj trenera:
        <FormSelect>
          {data.trener.map((item) => (
            <FormOption>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Dodaj egzaminatora:
        <FormSelect>
          {data.egzaminator.map((item) => (
            <FormOption>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Termin szkolenia:
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput type="date"></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput type="date"></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Rekomendacje:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormFlexContainer>
        <Button variant="outlined" className={classes.button}>
          Zakończ szkolenie
        </Button>
        <Button type="submit" variant="outlined" className={classes.button}>
          Zapisz
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Training;
