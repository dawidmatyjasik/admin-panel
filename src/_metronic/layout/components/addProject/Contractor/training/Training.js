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
  FormSubHeader,
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
  const [szkolenie, setSzkolenie] = useState([]);
  const [nazwaSzkolenia, setNazwaSzkolenia] = useState("");
  const [numerGrupy, setNumerGrupy] = useState("");

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
  const [imieTrenera, setImieTrenera] = useState("");
  const [nazwiskoTrenera, setNazwiskoTrenera] = useState("");
  const [egzaminator, setEgzaminator] = useState("");
  const [imieEgzaminatora, setImieEgzaminatora] = useState("");
  const [nazwiskoEgzaminatora, setNazwiskoEgzaminatora] = useState("");
  const [terminSzkoleniaOd, setTerminSzkoleniaOd] = useState("");
  const [terminSzkoleniaDo, setTerminSzkoleniaDo] = useState("");
  const [liczbaGodzinSzkolenia, setLiczbaGodzinSzkolenia] = useState("");
  const [rekomendacje, setRekomendacje] = useState("");

  useEffect(() => {
    db.collection("projects")
      .doc(`projekt`)
      .collection("wykonawcy")
      .doc("szkoelnia")
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

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`projekt`)
      .collection("wykonawcy")
      .doc("szkoelnia")
      .set({
        nazwaSzkolenia,
        numerGrupy,
        nazwaFrimySzkolenia,
        kodPocztowySzkolenia,
        miastoSzkolenia,
        ulicaSzkolenia,
        numerMieszkaniaSzkolenia,
        numerUmowySzkolenia,
        dataUmowySzkolenia,
        umowaPowierdzaniaDanych,
        umowaZgloszonaWup,
        dataZgloszenia,
        nazwaFrimyPodwykonawcy,
        kodPocztowyPodwykonawcy,
        miastoPodwykonawcy,
        ulicaPodwykonawcy,
        numerMieszkaniaPodwykonawcy,
        trener,
        imieTrenera,
        nazwiskoTrenera,
        egzaminator,
        imieEgzaminatora,
        nazwiskoEgzaminatora,
        terminSzkoleniaOd,
        terminSzkoleniaDo,
        liczbaGodzinSzkolenia,
        rekomendacje,
      });
    console.log("dodano");
  };

  useEffect(() => {
    if (szkolenie) {
      setNazwaSzkolenia(szkolenie.nazwaSzkolenia || "");
      setNumerGrupy(szkolenie.numerGrupy || "");
      setNazwaFrimySzkolenia(szkolenie.nazwaFrimySzkolenia || "");
      setKodPocztowySzkolenia(szkolenie.kodPocztowySzkolenia || "");
      setMiastoSzkolenia(szkolenie.miastoSzkolenia || "");
      setUlicaSzkolenia(szkolenie.ulicaSzkolenia || "");
      setNumerMieszkaniaSzkolenia(szkolenie.numerMieszkaniaSzkolenia || "");
      setNumerUmowySzkolenia(szkolenie.numerUmowySzkolenia || "");
      setDataUmowySzkolenia(szkolenie.dataUmowySzkolenia || "");
      setUmowaPowierdzaniaDanych(szkolenie.umowaPowierdzaniaDanych || "");
      setUmowaZgloszonaWup(szkolenie.umowaZgloszonaWup || "");
      setDataZgloszenia(szkolenie.dataZgloszenia || "");
      setNazwaFrimyPodwykonawcy(szkolenie.nazwaFrimyPodwykonawcy || "");
      setKodPocztowyPodwykonawcy(szkolenie.kodPocztowyPodwykonawcy || "");
      setMiastoPodwykonawcy(szkolenie.miastoPodwykonawcy || "");
      setUlicaPodwykonawcy(szkolenie.ulicaPodwykonawcy || "");
      setNumerMieszkaniaPodwykonawcy(
        szkolenie.numerMieszkaniaPodwykonawcy || ""
      );
      setTrener(szkolenie.trener || "");
      setImieTrenera(szkolenie.imieTrenera || "");
      setNazwiskoTrenera(szkolenie.nazwiskoTrenera || "");
      setEgzaminator(szkolenie.egzaminator || "");
      setImieEgzaminatora(szkolenie.imieEgzaminatora || "");
      setNazwiskoEgzaminatora(szkolenie.nazwiskoEgzaminatora || "");
      setTerminSzkoleniaOd(szkolenie.terminSzkoleniaOd || "");
      setTerminSzkoleniaDo(szkolenie.terminSzkoleniaDo || "");
      setLiczbaGodzinSzkolenia(szkolenie.liczbaGodzinSzkolenia || "");
      setRekomendacje(szkolenie.rekomendacje || "");
    }
  }, [szkolenie]);

  return (
    <Form>
      <Button
        type="submit"
        onClick={() => alert("będzie dodawało szkolenie")}
        variant="outlined"
        className={classes.button}
      >
        Dodaj szkolenie
      </Button>
      <FormLabel>
        Nazwa szkolenia:
        <FormInput
          value={nazwaSzkolenia}
          onChange={(e) => setNazwaSzkolenia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Numer grupy:
        <FormInput
          value={numerGrupy}
          onChange={(e) => setNumerGrupy(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormHeader>Wykonawca szkolenia:</FormHeader>
      <FormLabel>
        Nazwa firmy:
        <FormInput
          value={nazwaFrimySzkolenia}
          onChange={(e) => setNazwaFrimySzkolenia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy
        <FormInput
          value={kodPocztowySzkolenia}
          onChange={(e) => setKodPocztowySzkolenia(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput
          value={miastoSzkolenia}
          onChange={(e) => setMiastoSzkolenia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica
        <FormInput
          value={ulicaSzkolenia}
          onChange={(e) => setUlicaSzkolenia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Numer:
        <FormInput
          value={numerMieszkaniaSzkolenia}
          onChange={(e) => setNumerMieszkaniaSzkolenia(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Numer umowy:
        <FormInput
          value={numerUmowySzkolenia}
          onChange={(e) => setNumerUmowySzkolenia(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Data umowy:
        <FormInput
          value={dataUmowySzkolenia}
          onChange={(e) => setDataUmowySzkolenia(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Umowa powierzania danych:
        <FormSelect
          value={umowaPowierdzaniaDanych}
          onChange={(e) => setUmowaPowierdzaniaDanych(e.target.value)}
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
          value={dataZgloszenia}
          onChange={(e) => setDataZgloszenia(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormHeader>Podwykonawca szkolenia:</FormHeader>
      <FormLabel>
        Nazwa firmy:
        <FormInput
          value={nazwaFrimyPodwykonawcy}
          onChange={(e) => setNazwaFrimyPodwykonawcy(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy
        <FormInput
          value={kodPocztowyPodwykonawcy}
          onChange={(e) => setKodPocztowyPodwykonawcy(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput
          value={miastoPodwykonawcy}
          onChange={(e) => setMiastoPodwykonawcy(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica
        <FormInput
          value={ulicaPodwykonawcy}
          onChange={(e) => setUlicaPodwykonawcy(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Numer:
        <FormInput
          value={numerMieszkaniaPodwykonawcy}
          onChange={(e) => setNumerMieszkaniaPodwykonawcy(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormSubHeader>Trener:</FormSubHeader>
      <FormLabel>
        Imię:
        <FormInput
          value={imieTrenera}
          onChange={(e) => setImieTrenera(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwisko:
        <FormInput
          value={nazwiskoTrenera}
          onChange={(e) => setNazwiskoTrenera(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormSubHeader>Egzaminator:</FormSubHeader>
      <FormLabel>
        Imię:
        <FormInput
          value={imieEgzaminatora}
          onChange={(e) => setImieEgzaminatora(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwisko:
        <FormInput
          value={nazwiskoEgzaminatora}
          onChange={(e) => setNazwiskoEgzaminatora(e.target.value)}
        ></FormInput>
      </FormLabel>
      <br />
      <FormLabel style={{ alignItems: "center" }}>
        Termin szkolenia:
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput
              value={terminSzkoleniaOd}
              onChange={(e) => setTerminSzkoleniaOd(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput
              value={terminSzkoleniaDo}
              onChange={(e) => setTerminSzkoleniaDo(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Liczba godzin szkolenia:
        <FormInput
          value={liczbaGodzinSzkolenia}
          onChange={(e) => setLiczbaGodzinSzkolenia(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Rekomendacje:
        <FormSelect
          value={rekomendacje}
          onChange={(e) => setRekomendacje(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormFlexContainer>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="outlined"
          className={classes.button}
        >
          Zapisz
        </Button>
        <Button variant="outlined" className={classes.button}>
          Zakończ szkolenie
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Training;
