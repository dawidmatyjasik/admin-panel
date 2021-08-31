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
  const [diagnozaIpd, setDiagnozaIpd] = useState("");
  const [aktualizacjaIpd, setAktualizacjaIpd] = useState("");
  const [miastoDoradztwa, setMiastoDoradztwa] = useState("");
  const [ulicaDoradztwa, setUlicaDoradztwa] = useState("");
  const [numerDoradztwa, setNumerDoradztwa] = useState("");
  const [dataSpotkania, setDataSpotkania] = useState("");
  const [godzinySpotkaniaOd, setGodzinySpotkaniaOd] = useState("");
  const [godzinySpotkaniaDo, setGodzinySpotkaniaDo] = useState("");
  const [czasTrwania, setCzasTrwania] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [kwestionariusze, setKwestionariusze] = useState("");
  const [tematySzkolenia, setTematySzkolenia] = useState("");
  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");
  const [zmianaIpd, setZmianaIpd] = useState("");
  const [zmianaStazu, setZmianaStazu] = useState("");
  const [zmianaSzkolenia, setZmianaSzkolenia] = useState("");
  const [uwagi, setUwagi] = useState("");
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
        diagnozaIpd,
        aktualizacjaIpd,
        miastoDoradztwa,
        ulicaDoradztwa,
        numerDoradztwa,
        dataSpotkania,
        godzinySpotkaniaOd,
        godzinySpotkaniaDo,
        czasTrwania,
        a1,
        a2,
        kwestionariusze,
        tematySzkolenia,
        b1,
        b2,
        zmianaIpd,
        zmianaStazu,
        zmianaSzkolenia,
        uwagi,
      });
    console.log("dodano");
  };

  useEffect(() => {
    if (doradztwo) {
      setDiagnozaIpd(doradztwo.diagnozaIpd || "");
      setAktualizacjaIpd(doradztwo.aktualizacjaIpd || "");
      setMiastoDoradztwa(doradztwo.miastoDoradztwa || "");
      setUlicaDoradztwa(doradztwo.ulicaDoradztwa || "");
      setNumerDoradztwa(doradztwo.numerDoradztwa || "");
      setDataSpotkania(doradztwo.dataSpotkania || "");
      setGodzinySpotkaniaOd(doradztwo.godzinySpotkaniaOd || "");
      setGodzinySpotkaniaDo(doradztwo.godzinySpotkaniaDo || "");
      setCzasTrwania(doradztwo.czasTrwania || "");
      setA1(doradztwo.a1 || "");
      setA2(doradztwo.a2 || "");
      setKwestionariusze(doradztwo.kwestionariusze || "");
      setTematySzkolenia(doradztwo.tematySzkolenia || "");
      setB1(doradztwo.b1 || "");
      setB2(doradztwo.b2 || "");
      setZmianaIpd(doradztwo.zmianaIpd || "");
      setZmianaStazu(doradztwo.zmianaStazu || "");
      setZmianaSzkolenia(doradztwo.zmianaSzkolenia || "");
      setUwagi(doradztwo.uwagi || "");
    }
  }, [doradztwo]);

  return (
    <Form>
      <Button variant="outlined" className={classes.button}>
        Nie dotyczy
      </Button>
      <FormHeader>Sesja I</FormHeader>
      <FormLabel>
        Diagnoza z IPD
        <FormSelect
          value={diagnozaIpd}
          onChange={(e) => setDiagnozaIpd(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Aktualizacja IPD:
        <FormSelect
          value={aktualizacjaIpd}
          onChange={(e) => setAktualizacjaIpd(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Doradca zawodowy
        <FormInput
          style={{ fontWeight: "bold" }}
          disabled
          placeholder="Janusz Walczuk"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Data podsumowania:
        <FormInput
          disabled
          style={{ fontWeight: "bold" }}
          placeholder="21.06.2021r"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Dokument C1:
        <FormInput
          disabled
          style={{ fontWeight: "bold" }}
          placeholder="Tak"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Miejsce doradztwa:
        <FormInput
          value={miastoDoradztwa}
          onChange={(e) => setMiastoDoradztwa(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica doradztwa:
        <FormInput
          value={ulicaDoradztwa}
          onChange={(e) => setUlicaDoradztwa(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Miejsce doradztwa:
        <FormInput
          value={numerDoradztwa}
          onChange={(e) => setNumerDoradztwa(e.target.value)}
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
      {diagnozaIpd === "Tak" ? (
        <>
          <FormLabel>
            Część A1
            <FormSelect value={a1} onChange={(e) => setA1(e.target.value)}>
              <FormOption>Nie</FormOption>
              <FormOption>Tak</FormOption>
            </FormSelect>
          </FormLabel>
          <FormLabel>
            Część A2
            <FormSelect value={a2} onChange={(e) => setA2(e.target.value)}>
              <FormOption>Nie</FormOption>
              <FormOption>Tak</FormOption>
            </FormSelect>
          </FormLabel>
          <FormLabel>
            Kwestionariusze
            <FormSelect
              value={kwestionariusze}
              onChange={(e) => setKwestionariusze(e.target.value)}
            >
              <FormOption>Nie</FormOption>
              <FormOption>Tak</FormOption>
            </FormSelect>
          </FormLabel>
          <FormLabel>
            Temat szkolenia wynikajązdy z diagnozy:
            <FormInput
              value={tematySzkolenia}
              onChange={(e) => setTematySzkolenia(e.target.value)}
            ></FormInput>
          </FormLabel>
        </>
      ) : (
        <></>
      )}
      {aktualizacjaIpd === "Tak" ? (
        <>
          <FormLabel>
            Część B1:
            <FormSelect value={b1} onChange={(e) => setB1(e.target.value)}>
              <FormOption>Nie</FormOption>
              <FormOption>Tak</FormOption>
            </FormSelect>
          </FormLabel>
          <FormLabel>
            Część B2:
            <FormSelect value={b2} onChange={(e) => setB2(e.target.value)}>
              <FormOption>Nie</FormOption>
              <FormOption>Tak</FormOption>
            </FormSelect>
          </FormLabel>
          <FormLabel>
            Zmiana IPD:
            <FormSelect
              value={zmianaIpd}
              onChange={(e) => setZmianaIpd(e.target.value)}
            >
              <FormOption>Nie</FormOption>
              <FormOption>Tak</FormOption>
            </FormSelect>
          </FormLabel>
        </>
      ) : (
        <></>
      )}
      {zmianaIpd === "Tak" ? (
        <>
          <FormLabel>
            Zmiana stażu:
            <FormSelect
              value={zmianaStazu}
              onChange={(e) => setZmianaStazu(e.target.value)}
            >
              <FormOption>Nie</FormOption>
              <FormOption>Tak</FormOption>
            </FormSelect>
          </FormLabel>
          <FormLabel>
            Zmiana szkolenia:
            <FormSelect
              value={zmianaSzkolenia}
              onChange={(e) => setZmianaSzkolenia(e.target.value)}
            >
              <FormOption>Nie</FormOption>
              <FormOption>Tak</FormOption>
            </FormSelect>
          </FormLabel>
        </>
      ) : (
        <></>
      )}
      <FormLabel>
        Uwagi:
        <FormInput
          value={uwagi}
          onChange={(e) => setUwagi(e.target.value)}
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
