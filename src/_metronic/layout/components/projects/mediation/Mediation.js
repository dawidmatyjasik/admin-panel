import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../../../../firebase";
import {
  BasicList,
  BasicListContainer,
  BasicListElement,
  BasicListSpan,
  Form,
  FormDateContainer,
  FormFlexContainer,
  FormHeader,
  FormInput,
  FormInputMarker,
  FormLabel,
  FormLabelMarker,
  FormList,
  FormListItem,
  FormOption,
  FormSelect,
  FormSpan,
  FromDateWrapper,
} from "../ProjectsElements";
import TodayIcon from "@material-ui/icons/Today";

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
  const [dotyczy, setDotyczy] = useState("");
  const [dataZakonczeniaSzkolenia, setDataZakonczeniaSzkolenia] = useState("");
  const [posrednik, setPosrednik] = useState("");
  const [miastoPosrednictwa, setMiastoPosrednictwa] = useState("");
  const [ulicaPosrednictwa, setUlicaPosrednictwa] = useState("");
  const [numerPosrednictwa, setNumerPosrednictwa] = useState("");
  // const [adresPosrednictwa, setAdresPosrednictwa] = useState("");
  const [dataSpotkania, setDataSpotkania] = useState("");
  const [godzinySpotkaniaOd, setGodzinySpotkaniaOd] = useState("");
  const [godzinySpotkaniaDo, setGodzinySpotkaniaDo] = useState("");
  const [czasTrwania, setCzasTrwania] = useState("");
  const [dokumenty, setDokumenty] = useState("");
  const [kartaPp, setKartaPp] = useState("");
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
        dotyczy,
        dataZakonczeniaSzkolenia,
        posrednik,
        miastoPosrednictwa,
        ulicaPosrednictwa,
        numerPosrednictwa,
        /*         adresPosrednictwa, */
        dataSpotkania,
        godzinySpotkaniaOd,
        godzinySpotkaniaDo,
        czasTrwania,
        dokumenty,
        kartaPp,
        uwagi,
      });
    console.log("dodano");
  };

  useEffect(() => {
    if (posrednictwo) {
      setDotyczy(posrednictwo.dotyczy);
      setDataZakonczeniaSzkolenia(posrednictwo.dataZakonczeniaSzkolenia || "");
      setPosrednik(posrednictwo.posrednik || "");
      // setAdresPosrednictwa(posrednictwo.adresPosrednictwa || "");
      setMiastoPosrednictwa(posrednictwo.miastoPosrednictwa || "");
      setUlicaPosrednictwa(posrednictwo.ulicaPosrednictwa || "");
      setNumerPosrednictwa(posrednictwo.numerPosrednictwa || "");
      setDataSpotkania(posrednictwo.dataSpotkania || "");
      setGodzinySpotkaniaOd(posrednictwo.godzinySpotkaniaOd || "");
      setGodzinySpotkaniaDo(posrednictwo.godzinySpotkaniaDo || "");
      setCzasTrwania(posrednictwo.czasTrwania || "");
      setDokumenty(posrednictwo.dokumenty || "");
      setKartaPp(posrednictwo.kartaPp || "");
      setUwagi(posrednictwo.uwagi || "");
    }
  }, [posrednictwo]);

  const handleRefersTo = (e) => {
    e.preventDefault();
    setDotyczy(!dotyczy);
  };

  const classes = useStyles();
  return (
    <Form>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleRefersTo}
      >
        Nie dotyczy (należy kliknąć zapisz)
      </Button>
      <div style={dotyczy ? { opacity: "1" } : { opacity: "0.7" }}>
        <FormList>
          <FormListItem>
            <FormLabelMarker>
              Data zakończenia szkoleina:
              <FormInputMarker
                type="date"
                value={dataZakonczeniaSzkolenia}
                onChange={(e) => setDataZakonczeniaSzkolenia(e.target.value)}
              ></FormInputMarker>
            </FormLabelMarker>
          </FormListItem>
        </FormList>

        <FormHeader>Sesja I</FormHeader>
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
          Miejsce pośrednictwa:
          <FormInput
            value={miastoPosrednictwa}
            onChange={(e) => setMiastoPosrednictwa(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Ulica:
          <FormInput
            value={ulicaPosrednictwa}
            onChange={(e) => setUlicaPosrednictwa(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Numer:
          <FormInput
            value={numerPosrednictwa}
            onChange={(e) => setNumerPosrednictwa(e.target.value)}
          ></FormInput>
        </FormLabel>
        {/* <FormLabel>
        Pełny adress miejsca pośrednictwa:
        <FormInput
          value={adresPosrednictwa}
          onChange={(e) => setAdresPosrednictwa(e.target.value)}
        ></FormInput>
      </FormLabel> */}
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
          Czas trwania spotkania (h):
          <FormInput
            value={czasTrwania}
            onChange={(e) => setCzasTrwania(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Dokumenty:
          <FormSelect
            value={dokumenty}
            onChange={(e) => setDokumenty(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        {dokumenty === "Tak" ? (
          <FormLabel>
            Karta pp sesja I
            <FormSelect
              value={kartaPp}
              onChange={(e) => setKartaPp(e.target.value)}
            >
              <FormOption>Dokument 1</FormOption>
              <FormOption>Dokument 2</FormOption>
              <FormOption>Dokument 3</FormOption>
            </FormSelect>
          </FormLabel>
        ) : (
          <></>
        )}
        <FormLabel>
          Uwagi*:
          <FormInput
            value={uwagi}
            onChange={(e) => setUwagi(e.target.value)}
          ></FormInput>
        </FormLabel>
      </div>
      <FormFlexContainer>
        <Button
          variant="outlined"
          className={classes.button}
          style={dotyczy ? { opacity: "1" } : { opacity: "0.7" }}
        >
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
