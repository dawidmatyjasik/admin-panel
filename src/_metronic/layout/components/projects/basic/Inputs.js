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
    marginTop: "1%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    "@media (max-width: 1000px)": {
      width: "30%",
    },
    "@media (max-width: 500px)": {
      width: "35%",
    },
  },
}));

export default function Inputs({ podstawowe }) {
  const [dataZgloszenia, setDataZgloszenia] = useState("");
  const [dataPodpisania, setDataPodpisania] = useState("");
  const [wiek, setWiek] = useState(0);
  const [wyksztalcenie, setWyksztalcenie] = useState("");
  const [niepelnosprawnosc, setNiepelnosprawnosc] = useState("");
  const [status, setStatus] = useState("");
  const [osobaPracujaca, setOsobaPracujaca] = useState("");
  const [osobaBezrobotna, setOsobaBezrobotna] = useState("");
  const [uczaca, setUczaca] = useState("");
  const [koniecEdukacji, setKoniecEdukacji] = useState("");
  const [outplacment, setOutplacment] = useState("");
  const [bezrobocie, setBezrobocie] = useState(0);
  const [numerKonta, setNumerKonta] = useState("");
  const [mniejszoscNarodowa, setMniejszoscNarodowa] = useState("");
  const [bezdomna, setBezdomna] = useState("");
  const [niekorzystna, setNiekorzystna] = useState("");
  const [ct9, setCt9] = useState("");
  const [pozbawienieWolnosci, setPozbawienieWolnosci] = useState("");
  const [rolnictwo, setRolnictwo] = useState("");
  const [ubezpieczenie, setUbezpieczenie] = useState("");
  const [rodzajUbezpieczenia, setRodzajUbezpieczenia] = useState("");
  const [nazwaFirmy, setNazwaFirmy] = useState("");
  const [adresFirmy, setAdresFirmy] = useState("");
  const [stanowisko, setStanowisko] = useState("");
  const [klasyfikacja, setKlasyfikacja] = useState("");
  const [innaKlasyfikacja, setInnaKlasyfikacja] = useState("");
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
        osobaPracujaca,
        osobaBezrobotna,
        uczaca,
        outplacment,
        bezrobocie,
        numerKonta,
        mniejszoscNarodowa,
        bezdomna,
        niekorzystna,
        ct9,
        pozbawienieWolnosci,
        rolnictwo,
        ubezpieczenie,
        rodzajUbezpieczenia,
        nazwaFirmy,
        adresFirmy,
        stanowisko,
        klasyfikacja,
        innaKlasyfikacja,
        zatrudnienieOd,
        zatrudnienieDo,
        rodzajPrzedsiebiorstwa,
        nip,
        inne,
      });
    alert("zapisano!");
  };

  useEffect(() => {
    if (podstawowe) {
      setDataZgloszenia(podstawowe.dataZgloszenia || "");
      setDataPodpisania(podstawowe.dataPodpisania || "");
      setWiek(podstawowe.wiek || "");
      setWyksztalcenie(podstawowe.wyksztalcenie || "");
      setNiepelnosprawnosc(podstawowe.niepelnosprawnosc || "");
      setStatus(podstawowe.status || "");
      setOsobaPracujaca(podstawowe.osobaPracujaca || "");
      setOsobaBezrobotna(podstawowe.osobaBezrobotna || "");
      setUczaca(podstawowe.uczaca || "");
      setOutplacment(podstawowe.outplacment || "");
      setBezrobocie(podstawowe.bezrobocie || "");
      setNumerKonta(podstawowe.numerKonta || "");
      setMniejszoscNarodowa(podstawowe.mniejszoscNarodowa || "");
      setBezdomna(podstawowe.bezdomna || "");
      setNiekorzystna(podstawowe.niekorzystna || "");
      setCt9(podstawowe.ct9 || "");
      setPozbawienieWolnosci(podstawowe.pozbawienieWolnosci || "");
      setRolnictwo(podstawowe.rolnictwo || "");
      setUbezpieczenie(podstawowe.ubezpieczenie || "");
      setRodzajUbezpieczenia(podstawowe.rodzajUbezpieczenia || "");
      setNazwaFirmy(podstawowe.nazwaFirmy || "");
      setAdresFirmy(podstawowe.adresFirmy || "");
      setStanowisko(podstawowe.stanowisko || "");
      setKlasyfikacja(podstawowe.klasyfikacja || "");
      setInnaKlasyfikacja(podstawowe.innaKlasyfikacja || "");
      setZatrudnienieOd(podstawowe.zatrudnienieOd || "");
      setZatrudnienieDo(podstawowe.zatrudnienieDo || "");
      setRodzajPrzedsiebiorstwa(podstawowe.rodzajPrzedsiebiorstwa || "");
      setNip(podstawowe.nip || "");
      setInne(podstawowe.inne || "");
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
          <FormOption>Podstawowe (ISCED 1)</FormOption>
          <FormOption>Gimnazjalne (ISCED 2)</FormOption>
          <FormOption>Ponadgimnazjalne (ISCED 3)</FormOption>
          <FormOption>Policealne (ISCED 4)</FormOption>
          <FormOption>Wyższe (ISCED 5-8)</FormOption>
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
          <FormOption>Zaburzenia psychiczne</FormOption>
          <FormOption>Odmowa podania informacji</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Status na rynku pracy:
        <FormSelect value={status} onChange={(e) => setStatus(e.target.value)}>
          <FormOption>Osoba pracująca</FormOption>
          <FormOption>Osoba bezrobotna</FormOption>
          <FormOption>Osoba bierna zawodowo</FormOption>
          <FormOption>Outplacment</FormOption>
        </FormSelect>
      </FormLabel>
      {status === "Osoba pracująca" ? (
        <FormLabel>
          Osoba pracująca:
          <FormSelect
            value={osobaPracujaca}
            onChange={(e) => setOsobaPracujaca(e.target.value)}
          >
            <FormOption>Ubogo pracująca</FormOption>
            <FormOption>Umowa cywilnoprawna</FormOption>
            <FormOption>Umowa krótkoterminowa</FormOption>
            <FormOption>Działalność gospodarcza</FormOption>
            <FormOption>Umowa o pracę</FormOption>
          </FormSelect>
        </FormLabel>
      ) : <></> && status === "Osoba bezrobotna" ? (
        <FormLabel>
          Osoba bezrobotna:
          <FormSelect
            value={osobaBezrobotna}
            onChange={(e) => setOsobaBezrobotna(e.target.value)}
          >
            <FormOption>Zarejestrowana</FormOption>
            <FormOption>Niezarejestrowana</FormOption>
          </FormSelect>
        </FormLabel>
      ) : <></> && status === "Osoba bierna zawodowo" ? (
        <FormLabel>
          Ucząca się:
          <FormSelect
            value={uczaca}
            onChange={(e) => setUczaca(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
      ) : <></> && status === "Outplacment" ? (
        <FormLabel>
          Osoba pracująca:
          <FormSelect
            value={outplacment}
            onChange={(e) => setOutplacment(e.target.value)}
          >
            <FormOption>Zagrożona zwolnieniem</FormOption>
            <FormOption>Przewidziana do zwolnienia</FormOption>
            <FormOption>Zwolniona</FormOption>
          </FormSelect>
        </FormLabel>
      ) : (
        <></>
      )}
      {uczaca === "Tak" && status === "Osoba bierna zawodowo" ? (
        <FormLabel>
          Planowa data zakończenia edukacji:
          <FormInput
            type="date"
            value={koniecEdukacji}
            onChange={(e) => setKoniecEdukacji(e.target.value)}
          ></FormInput>
        </FormLabel>
      ) : (
        <></>
      )}
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
        <FormLabel>
          Ubezpieczenie społeczne:
          <FormSelect
            value={rodzajUbezpieczenia}
            onChange={(e) => setRodzajUbezpieczenia(e.target.value)}
          >
            <FormOption>Renta rodzinna</FormOption>
            <FormOption>Emerytura</FormOption>
            <FormOption>Zasiłek dla bezrobotnych</FormOption>
            <FormOption>Renta z tytułu niezdonlności do pracy</FormOption>
          </FormSelect>
        </FormLabel>
      ) : (
        <></>
      )}
      {status === "Osoba pracująca" || status === "Outplacment" ? (
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
              <FormOption>Instruktor praktycznej nauki zawodu</FormOption>
              <FormOption>
                Kluczowy pracownik instytucji pomocy i integracji społecznej
              </FormOption>
              <FormOption>Nauczyciel kształcenia ogólnego</FormOption>
              <FormOption>Nauczyciel kształcenia zawodowego</FormOption>
              <FormOption>Nauczyciel wychowania przedszkolnego</FormOption>
              <FormOption>Pracownik instytucji rynku pracy</FormOption>
              <FormOption>
                Pracownik instytucji systemu ochrony zdrowia
              </FormOption>
              <FormOption>
                Pracownik instytucji systemu wspierania rodzin i pieczy
                zastępczej{" "}
              </FormOption>
              <FormOption>
                Pracownik instytucji szkolenictwa wyższego
              </FormOption>
              <FormOption>
                Pracownik ośrodka wsparcia ekonomii społecznej
              </FormOption>
              <FormOption>
                Pracownik poradni psychologiczno-pedagogicznej
              </FormOption>
              <FormOption>Rolnik</FormOption>
              <FormOption>Inne</FormOption>
            </FormSelect>
          </FormLabel>
          {klasyfikacja === "Inne" ? (
            <FormLabel>
              Inne jakie?
              <FormInput
                value={innaKlasyfikacja}
                onChange={(e) => setInnaKlasyfikacja(e.target.value)}
              ></FormInput>
            </FormLabel>
          ) : (
            <></>
          )}
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
