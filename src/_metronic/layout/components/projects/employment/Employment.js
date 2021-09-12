import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../../../../firebase";
import {
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
const Employment = () => {
  const [zatrudnienie, setZatrudnienie] = useState([]);
  const [dotyczy, setDotyczy] = useState("");
  const [podjecieZatrudnienia, setPodjecieZatrudnienia] = useState("");
  const [zmianaFormyZatrudnienia, setZmianaFormyZatrudnienia] = useState("");
  const [uwagi, setUwagi] = useState("");
  const [dataOstatniejFormyWsparcia, setDataOstatniejFormyWsparcia] = useState(
    ""
  );
  const [wskaznik4tygodni, setWskaznik4tygodni] = useState("");
  const [wskaznik3miesiecy, setWskaznik3miesiecy] = useState("");
  const [wskaznik6miesiecy, setWskaznik6miesiecy] = useState("");
  const [dataPodpisaniaUmowy, setDataPodpisaniaUmowy] = useState("");
  const [czasTrwaniaOd, setCzasTrwaniaOd] = useState("");
  const [czasTrwaniaDo, setCzasTrwaniaDo] = useState("");
  const [rodzajUmowy, setRodzajUmowy] = useState("Umowa o pracę");
  const [wymiarEtatu, setWymiarEtatu] = useState("");
  const [umowaWskaznikowa, setUmowaWskaznikowa] = useState("");
  const [nazwaFirmy, setNazwaFirmy] = useState("");
  const [kodPocztowyFirmy, setKodPocztowyFirmy] = useState("");
  const [miastoFirmy, setMiastoFirmy] = useState("");
  const [ulicaFirmy, setUlicaFirmy] = useState("");
  const [numerFirmy, setNumerFirmy] = useState("");
  const [nip, setNip] = useState("");
  const [stanowisko, setStanowisko] = useState("");
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
    if (zatrudnienie) {
      setDotyczy(zatrudnienie.dotyczy);
      setPodjecieZatrudnienia(zatrudnienie.kontyunacjaZatrudnienia || "");
      setZmianaFormyZatrudnienia(zatrudnienie.zmianaFormyZatrudnienia || "");
      setUwagi(zatrudnienie.uwagi || "");
      setDataOstatniejFormyWsparcia(
        zatrudnienie.dataOstatniejFormyWsparcia || ""
      );
      setWskaznik4tygodni(zatrudnienie.wskaznik4tygodni || "");
      setWskaznik3miesiecy(zatrudnienie.wskaznik3miesiecy || "");
      setWskaznik6miesiecy(zatrudnienie.wskaznik6miesiecy || "");
      setDataPodpisaniaUmowy(zatrudnienie.dataPodpisaniaUmowy || "");
      setCzasTrwaniaOd(zatrudnienie.czasTrwaniaOd || "");
      setCzasTrwaniaDo(zatrudnienie.czasTrwaniaDo || "");
      setRodzajUmowy(zatrudnienie.rodzajUmowy || "");
      setWymiarEtatu(zatrudnienie.wymiarEtatu || "");
      setUmowaWskaznikowa(zatrudnienie.umowaWskaznikowa || "");
      setNazwaFirmy(zatrudnienie.nazwaFirmy || "");
      setKodPocztowyFirmy(zatrudnienie.kodPocztowyFirmy || "");
      setMiastoFirmy(zatrudnienie.miastoFirmy || "");
      setUlicaFirmy(zatrudnienie.ulicaFirmy || "");
      setNumerFirmy(zatrudnienie.numerFirmy || "");
      setNip(zatrudnienie.nip || "");
      setStanowisko(zatrudnienie.stanowisko || "");
    }
  }, [zatrudnienie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("zatrudnienie")
      .set({
        dotyczy,
        podjecieZatrudnienia,
        zmianaFormyZatrudnienia,
        uwagi,
        dataOstatniejFormyWsparcia,
        wskaznik4tygodni,
        wskaznik3miesiecy,
        wskaznik6miesiecy,
        dataPodpisaniaUmowy,
        czasTrwaniaOd,
        czasTrwaniaDo,
        rodzajUmowy,
        wymiarEtatu,
        umowaWskaznikowa,
        nazwaFirmy,
        kodPocztowyFirmy,
        miastoFirmy,
        ulicaFirmy,
        numerFirmy,
        nip,
        stanowisko,
      });
    console.log("dodano");
  };
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
              Data ostatniej formy wsparcia:
              <FormInputMarker
                type="date"
                value={dataOstatniejFormyWsparcia}
                onChange={(e) => setDataOstatniejFormyWsparcia(e.target.value)}
              ></FormInputMarker>
            </FormLabelMarker>
          </FormListItem>
        </FormList>
        <FormLabel>
          Podjęcie zatrudnienia:
          <FormSelect
            value={podjecieZatrudnienia}
            onChange={(e) => setPodjecieZatrudnienia(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
            <FormOption>Nie dotyczny</FormOption>
            <FormOption>Kontynuacja zatrudnienia</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Wskaźnik do 4 tygodni
          <FormSelect
            value={wskaznik4tygodni}
            onChange={(e) => setWskaznik4tygodni(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Wskaźnik do 3 miesięcy:
          <FormSelect
            value={wskaznik3miesiecy}
            onChange={(e) => setWskaznik3miesiecy(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Wskaźnik do 6 miesięcy:
          <FormSelect
            value={wskaznik6miesiecy}
            onChange={(e) => setWskaznik6miesiecy(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Data podpisania umowy / aneksu:
          <FormInput
            value={dataPodpisaniaUmowy}
            onChange={(e) => setDataPodpisaniaUmowy(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel style={{ alignItems: "center" }}>
          Czas trwania umowy / aneksu:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={czasTrwaniaOd}
                onChange={(e) => setCzasTrwaniaOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={czasTrwaniaDo}
                onChange={(e) => setCzasTrwaniaDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
        <FormLabel>
          Rodzaj umowy:
          <FormSelect
            value={rodzajUmowy}
            onChange={(e) => setRodzajUmowy(e.target.value)}
          >
            <FormOption>Umowa o pracę</FormOption>
            <FormOption>Umowa zlecenie</FormOption>
            <FormOption>Umowa o dzieło</FormOption>
            <FormOption>Działalność gospodarcza:</FormOption>
          </FormSelect>
        </FormLabel>
        {rodzajUmowy === "Umowa o pracę" ? (
          <FormLabel>
            Wymiar etatu:
            <FormInput
              type="number"
              value={wymiarEtatu}
              min="0"
              step="0.1"
              onChange={(e) =>
                setWymiarEtatu(parseFloat(e.target.value).toFixed(2))
              }
            ></FormInput>
          </FormLabel>
        ) : (
          <></>
        )}
        <FormLabel>
          Umowa wskaźnikowa:
          <FormSelect
            value={umowaWskaznikowa}
            onChange={(e) => setUmowaWskaznikowa(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        {podjecieZatrudnienia === "Tak" ||
        podjecieZatrudnienia === "Kontynuacja zatrudnienia" ? (
          <>
            <FormHeader>Pracodawca:</FormHeader>
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
                value={kodPocztowyFirmy}
                onChange={(e) => setKodPocztowyFirmy(e.target.value)}
                type="tel"
              ></FormInput>
            </FormLabel>
            <FormLabel>
              Miasto:
              <FormInput
                value={miastoFirmy}
                onChange={(e) => setMiastoFirmy(e.target.value)}
              ></FormInput>
            </FormLabel>
            <FormLabel>
              Ulica:
              <FormInput
                value={ulicaFirmy}
                onChange={(e) => setUlicaFirmy(e.target.value)}
              ></FormInput>
            </FormLabel>
            <FormLabel>
              Numer:
              <FormInput
                value={numerFirmy}
                onChange={(e) => setNumerFirmy(e.target.value)}
                type="number"
              ></FormInput>
            </FormLabel>
            <FormLabel>
              Nip:
              <FormInput
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                type="number"
              ></FormInput>
            </FormLabel>
            <FormLabel>
              Stanowisko:
              <FormInput
                value={stanowisko}
                onChange={(e) => setStanowisko(e.target.value)}
              ></FormInput>
            </FormLabel>
          </>
        ) : (
          <></>
        )}
        {podjecieZatrudnienia === "Kontynuacja zatrudnienia" ? (
          <FormLabel>
            Zmiana formy zatrudnienia:
            <FormSelect
              value={zmianaFormyZatrudnienia}
              onChange={(e) => setZmianaFormyZatrudnienia(e.target.value)}
            >
              <FormOption>Zwiększenie stawki (awans finansowy)</FormOption>
              <FormOption>Awans stanowiskowy</FormOption>
              <FormOption>
                Przejście z niepwengo do stabilnego zatrudnienia
              </FormOption>
              <FormOption>
                Przejście z niepełnego do stabilnego zatrudnienia
              </FormOption>
              <FormOption>
                Zmiana pracy na inną wymagająca wyższych kompetencji,
                umiejętności, kwalifikacji
              </FormOption>
              <FormOption>Zmiana pracy na wyżej wynagradzaną</FormOption>
              <FormOption>Nie dotyczy - outplacment</FormOption>
            </FormSelect>
          </FormLabel>
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
      </div>
      <FormFlexContainer>
        <Button
          variant="outlined"
          className={classes.button}
          style={dotyczy ? { opacity: "1" } : { opacity: "0.7" }}
          onClick={() => alert("będzie dodawało umowę")}
        >
          Dodaj umowę
        </Button>
        <Button
          type="submit"
          variant="outlined"
          className={classes.button}
          onClick={handleSubmit}
        >
          Zapisz
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Employment;
