import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../../../../firebase";
import {
  Form,
  FormHeader,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
} from "../ProjectsElements";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "3%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
  },
}));

export default function Inputs({ podstawowe }) {
  const [dataZgloszenia, setDataZgloszenia] = useState("");
  const [dataPodpisania, setDataPodpisania] = useState("");
  const [wiek, setWiek] = useState(0);
  const [wyksztalcenie, setWyksztalcenie] = useState("");
  const [niepelnosprawnosc, setNiepelnosprawnosc] = useState("");
  const [status, setStatus] = useState("");
  const [bezrobocie, setBezrobocie] = useState(0);
  const [numerKonta, setNumerKonta] = useState("");
  const [mniejszoscNarodowa, setMniejszoscNarodowa] = useState("");
  const [bezdomna, setBezdomna] = useState("");
  const [niekorzystna, setNiekorzystna] = useState("");
  const [ct9, setCt9] = useState("");
  const [pozbawienieWolnosci, setPozbawienieWolnosci] = useState("");
  const [rolnictwo, setRolnictwo] = useState("");
  const [ubezpieczenie, setUbezpieczenie] = useState("");
  const [nazwaFirmy, setNazwaFirmy] = useState("");
  const [adresFirmy, setAdresFirmy] = useState("");
  const [stanowisko, setStanowisko] = useState("");
  const [klasyfikacja, setKlasyfikacja] = useState("");
  const [zatrudnienieOd, setZatrudnienieOd] = useState("");
  const [zatrudnienieDo, setZatrudnienieDo] = useState("");
  const [rodzajPrzedsiebiorstwa, setRodzajPrzedsiebiorstwa] = useState("");
  const [nip, setNip] = useState("");
  const [inne, setInne] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("podstawowe")
      .set({
        dataZgloszenia,
        dataPodpisania,
        wiek,
        wyksztalcenie,
        niepelnosprawnosc,
        status,
        bezrobocie,
        numerKonta,
        mniejszoscNarodowa,
        bezdomna,
        niekorzystna,
        ct9,
        pozbawienieWolnosci,
        rolnictwo,
        ubezpieczenie,
        nazwaFirmy,
        adresFirmy,
        stanowisko,
        klasyfikacja,
        zatrudnienieOd,
        zatrudnienieDo,
        rodzajPrzedsiebiorstwa,
        nip,
        inne,
      });
    console.log("dodano");
  };

  useEffect(() => {
    if (podstawowe) {
      setDataZgloszenia(podstawowe[0]?.data?.dataZgloszenia || "");
      setDataPodpisania(podstawowe[0]?.data?.dataPodpisania || "");
      setWiek(podstawowe[0]?.data?.wiek || "");
      setWyksztalcenie(podstawowe[0]?.data?.wyksztalcenie || "");
      setNiepelnosprawnosc(podstawowe[0]?.data?.niepelnosprawnosc || "");
      setStatus(podstawowe[0]?.data?.status || "");
      setBezrobocie(podstawowe[0]?.data?.bezrobocie || "");
      setNumerKonta(podstawowe[0]?.data?.numerKonta || "");
      setMniejszoscNarodowa(podstawowe[0]?.data?.mniejszoscNarodowa || "");
      setBezdomna(podstawowe[0]?.data?.bezdomna || "");
      setNiekorzystna(podstawowe[0]?.data?.niekorzystna || "");
      setCt9(podstawowe[0]?.data?.ct9 || "");
      setPozbawienieWolnosci(podstawowe[0]?.data?.pozbawienieWolnosci || "");
      setRolnictwo(podstawowe[0]?.data?.rolnictwo || "");
      setUbezpieczenie(podstawowe[0]?.data?.ubezpieczenie || "");
      setNazwaFirmy(podstawowe[0]?.data?.nazwaFirmy || "");
      setAdresFirmy(podstawowe[0]?.data?.adresFirmy || "");
      setStanowisko(podstawowe[0]?.data?.stanowisko || "");
      setKlasyfikacja(podstawowe[0]?.data?.klasyfikacja || "");
      setZatrudnienieOd(podstawowe[0]?.data?.zatrudnienieOd || "");
      setZatrudnienieDo(podstawowe[0]?.data?.zatrudnienieDo || "");
      setRodzajPrzedsiebiorstwa(
        podstawowe[0]?.data?.rodzajPrzedsiebiorstwa || ""
      );
      setNip(podstawowe[0]?.data?.nip || "");
      setInne(podstawowe[0]?.data?.inne || "");
    }
  }, [podstawowe]);

  const classes = useStyles();
  return (
    <Form>
      <FormLabel>
        Data złożenia formularza zgłoszeniowego:
        <FormInput
          type="date"
          value={dataZgloszenia}
          onChange={(e) => setDataZgloszenia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Data podpisania umowy w projekcie:
        <FormInput
          type="date"
          value={dataPodpisania}
          onChange={(e) => setDataPodpisania(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Wiek w momencie przystąpienia:
        <FormInput
          type="number"
          value={wiek}
          onChange={(e) => setWiek(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Wykształecnie deklarowane w projekcie:
        <FormSelect
          value={wyksztalcenie}
          onChange={(e) => setWyksztalcenie(e.target.value)}
        >
          <FormOption>Podstawowe</FormOption>
          <FormOption>Gimnazjalne</FormOption>
          <FormOption>Ponadgimnazjalne</FormOption>
          <FormOption>Policealne</FormOption>
          <FormOption>Wyższe</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Niepełnosprawność:
        <FormSelect
          value={niepelnosprawnosc}
          onChange={(e) => setNiepelnosprawnosc(e.target.value)}
        >
          <FormOption>Brak</FormOption>
          <FormOption>Stopień lekki</FormOption>
          <FormOption>Stopień umiarkowany</FormOption>
          <FormOption>Stopień znaczny</FormOption>
          <FormOption>Odmowa podania informacji</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Status na rynku pracy:
        <FormSelect value={status} onChange={(e) => setStatus(e.target.value)}>
          <FormOption>Osoba pracująca</FormOption>
          <FormOption>Osoba niepracująca</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Liczba miesięcy bezrobocia:
        <FormInput
          type="number"
          value={bezrobocie}
          onChange={(e) => setBezrobocie(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Numer konta bankowego:
        <FormInput
          type="tel"
          value={numerKonta}
          onChange={(e) => setNumerKonta(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Należy do mniejszości narodowej, etnicznej, migrant, osoba obcego
        pochodzenia:
        <FormSelect
          value={mniejszoscNarodowa}
          onChange={(e) => setMniejszoscNarodowa(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba bezdomna lub dotknięta wykluczeniem dostępu do mieszkań
        <FormSelect
          value={bezdomna}
          onChange={(e) => setBezdomna(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Znajduje się w innej niekorzystnej sytuacji społecznej:
        <FormSelect
          value={niekorzystna}
          onChange={(e) => setNiekorzystna(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Były uczestnik w ramach CT 9:
        <FormSelect value={ct9} onChange={(e) => setCt9(e.target.value)}>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba odbywająca karę pozbawiena wolności:
        <FormSelect
          value={pozbawienieWolnosci}
          onChange={(e) => setPozbawienieWolnosci(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba odchodząca z rolnictwa:
        <FormSelect
          value={rolnictwo}
          onChange={(e) => setRolnictwo(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Czy uczestnik ma inny tytuł do ubezpieczeń społecznych:
        <FormSelect
          value={ubezpieczenie}
          onChange={(e) => setUbezpieczenie(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      {ubezpieczenie === "Tak" ? (
        <>
          <FormHeader>Dane pracodawcy:</FormHeader>
          <FormLabel>
            Nazwa firmy:
            <FormInput
              type="text"
              value={nazwaFirmy}
              onChange={(e) => setNazwaFirmy(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Adres firmy:
            <FormInput
              type="text"
              value={adresFirmy}
              onChange={(e) => setAdresFirmy(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Stanowisko pracy u pracodawcy:
            <FormInput
              type="text"
              value={stanowisko}
              onChange={(e) => setStanowisko(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Klasyfikacja zawodów:
            <FormSelect
              value={klasyfikacja}
              onChange={(e) => setKlasyfikacja(e.target.value)}
            >
              <FormOption>Brak</FormOption>
            </FormSelect>
          </FormLabel>
          <FormLabel>
            Okres zatrudnienia od:
            <FormInput
              type="date"
              value={zatrudnienieOd}
              onChange={(e) => setZatrudnienieOd(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Okres zatrudnienia do:
            <FormInput
              type="date"
              value={zatrudnienieDo}
              onChange={(e) => setZatrudnienieDo(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Rodzaj przedsiębiorstwa:
            <FormSelect
              onChange={(e) => setRodzajPrzedsiebiorstwa(e.target.value)}
              value={rodzajPrzedsiebiorstwa}
            >
              <FormOption>Administracja rządowa</FormOption>
              <FormOption>Administracja samorządowa</FormOption>
              <FormOption>Duże przedsiębiorstwo</FormOption>
              <FormOption>MMŚP</FormOption>
              <FormOption>Organizacja pozarządowa</FormOption>
              <FormOption>Własna</FormOption>
              <FormOption>Inne</FormOption>
            </FormSelect>
          </FormLabel>
        </>
      ) : (
        <></>
      )}
      {(() => {
        if (rodzajPrzedsiebiorstwa === "Własna") {
          return (
            <FormLabel>
              NIP:
              <FormInput
                type="tel"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
              ></FormInput>
            </FormLabel>
          );
        } else if (rodzajPrzedsiebiorstwa === "Inne") {
          return (
            <FormLabel>
              Jakie:
              <FormInput
                type="text"
                value={inne}
                onChange={(e) => setInne(e.target.value)}
              ></FormInput>
            </FormLabel>
          );
        } else {
          return <></>;
        }
      })()}
      <Button
        type="submit"
        variant="outlined"
        onClick={handleSubmit}
        className={classes.button}
      >
        Zapisz
      </Button>
    </Form>
  );
}