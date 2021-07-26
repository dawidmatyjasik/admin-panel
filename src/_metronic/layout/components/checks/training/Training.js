import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import db from "../../../../../firebase";
import {
  Form,
  FormHeader,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
} from "../../projects/ProjectsElements";
const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "3%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    "&:nth-child(1)": {
      marginRight: "2%",
    },
  },
  input: {
    width: "calc(30% + 24.5% + 10px)",
    marginBottom: "1%",
    "@media (max-width: 1000px)": {
      width: "calc(30% + 38.5% + 10px)",
    },
    "@media (max-width: 500px)": {
      width: "calc(30% + 52.5% + 10px)",
    },
  },
}));

const data = {
  control: [
    "Jacek Nowak",
    "Andrzej Brońka",
    "Zbigniew Wodecki",
    "Krzysztof Liszka",
  ],
  projects: ["Projekt komercyjny", "Ćwiczenie integracyjne", "Zadanie domowe"],
  training: [
    "Szkolenie indywidualne",
    "Ćwiczenie grupowe",
    "Trening integracyjny",
  ],
  group: ["Juniorzy", "Seniorzy", "Emeryci", "Doświadczeni"],
};

const Training = () => {
  const [kontrola, setKontrola] = useState([]);
  const [projekt, setProjekt] = useState("");
  const [szkolenie, setSzkolenie] = useState("");
  const [grupa, setGrupa] = useState("");
  const [dataSzkolenia, setDataSzkolenia] = useState("");
  const [miejsceSzkolenia, setMiejsceSzkolenia] = useState("");
  const [trener, setTrener] = useState("");
  const [liczbaOsob, setLiczbaOsob] = useState("");
  const [dataKontroli, setDataKontroli] = useState("");
  const [dzienTygodnia, setDzienTygodnia] = useState("");
  const [godzinaKontroli, setGodzinaKontroli] = useState("");
  const [osobaKontrolujaca, setOsobaKontrolujaca] = useState("");
  const [
    kontrolaZaplanowanymTerminie,
    setKontrolaZaplanowanymTerminie,
  ] = useState("");
  const [nowyTerminKontroli, setNowyTerminKontroli] = useState("");
  const [
    kontrolaZaplanowanejGodzinie,
    setKontrolaZaplanowanejGodzinie,
  ] = useState("");
  const [nowaGodzinaKontroli, setNowaGodzinaKontroli] = useState("");
  const [nazwiskoTrenera, setNazwiskoTrenera] = useState("");
  const [imieTrenera, setImieTrenera] = useState("");
  const [pelnaDokumentacja, setPelnaDokumentacja] = useState("");
  const [liczbaUczestnikow, setLiczbaUczestnikow] = useState("");
  const [plakatProjektowy, setPlakatProjektowy] = useState("");
  const [liczbaAnkiet, setLiczbaAnkiet] = useState("");
  const [wynikiAnkiet, setWynikiAnkiet] = useState("");
  const [wymaganaPonownaKontrola, setWymaganaPonownaKontrola] = useState("");

  const classes = useStyles();

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("kontrola")
      .doc("szkolenie")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setKontrola(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    if (kontrola) {
      setProjekt(kontrola.projekt || "");
      setSzkolenie(kontrola.szkolenie || "");
      setGrupa(kontrola.grupa || "");
      setDataSzkolenia(kontrola.dataSzkolenia || "");
      setMiejsceSzkolenia(kontrola.miejsceSzkolenia || "");
      setTrener(kontrola.trener || "");
      setLiczbaOsob(kontrola.liczbaOsob || "");
      setDataKontroli(kontrola.dataKontroli || "");
      setDzienTygodnia(kontrola.dzienTygodnia || "");
      setGodzinaKontroli(kontrola.godzinaKontroli || "");
      setOsobaKontrolujaca(kontrola.osobaKontrolujaca || "");
      setKontrolaZaplanowanymTerminie(
        kontrola.kontrolaZaplanowanymTerminie || ""
      );
      setNowyTerminKontroli(kontrola.nowyTerminKontroli || "");
      setKontrolaZaplanowanejGodzinie(
        kontrola.kontrolaZaplanowanejGodzinie || ""
      );
      setNowaGodzinaKontroli(kontrola.nowaGodzinaKontroli || "");
      setNazwiskoTrenera(kontrola.nazwiskoTrenera || "");
      setImieTrenera(kontrola.imieTrenera || "");
      setPelnaDokumentacja(kontrola.pelnaDokumentacja || "");
      setLiczbaUczestnikow(kontrola.liczbaUczestnikow || "");
      setPlakatProjektowy(kontrola.plakatProjektowy || "");
      setLiczbaAnkiet(kontrola.liczbaAnkiet || "");
      setWynikiAnkiet(kontrola.wynikiAnkiet || "");
      setWymaganaPonownaKontrola(kontrola.wymaganaPonownaKontrola || "");
    }
  }, [kontrola]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("kontrola")
      .doc("szkolenie")
      .set({
        kontrola,
        projekt,
        szkolenie,
        grupa,
        dataSzkolenia,
        miejsceSzkolenia,
        trener,
        liczbaOsob,
        dataKontroli,
        dzienTygodnia,
        godzinaKontroli,
        osobaKontrolujaca,
        kontrolaZaplanowanymTerminie,
        nowyTerminKontroli,
        kontrolaZaplanowanejGodzinie,
        nowaGodzinaKontroli,
        nazwiskoTrenera,
        imieTrenera,
        pelnaDokumentacja,
        liczbaUczestnikow,
        plakatProjektowy,
        liczbaAnkiet,
        wynikiAnkiet,
        wymaganaPonownaKontrola,
      });
    console.log("dodano");
  };

  return (
    <Form>
      <Autocomplete
        options={data.projects}
        style={{ width: "100%" }}
        value={projekt}
        onChange={(event, newValue) => {
          setProjekt(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Projekt"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <Autocomplete
        options={data.training}
        value={szkolenie}
        onChange={(event, newValue) => {
          setSzkolenie(newValue);
        }}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Szkolenie"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <Autocomplete
        options={data.group}
        style={{ width: "100%" }}
        value={grupa}
        onChange={(event, newValue) => {
          setGrupa(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Grupa"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <FormLabel>
        Data szkolenia:
        <FormInput
          value={dataSzkolenia}
          onChange={(e) => setDataSzkolenia(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Miejsce szkolenia:
        <FormInput
          value={miejsceSzkolenia}
          onChange={(e) => setMiejsceSzkolenia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Trener:
        <FormInput
          value={trener}
          onChange={(e) => setTrener(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Liczba osób w grupie:
        <FormInput
          value={liczbaOsob}
          onChange={(e) => setLiczbaOsob(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormHeader>Plan kontroli:</FormHeader>
      <FormLabel>
        Data planowanej kontroli:
        <FormInput
          value={dataKontroli}
          onChange={(e) => setDataKontroli(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Dzień tygodnia:
        <FormInput
          value={dzienTygodnia}
          onChange={(e) => setDzienTygodnia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Godziny planowanej kontroli:
        <FormSelect
          value={godzinaKontroli}
          onChange={(e) => setGodzinaKontroli(e.target.value)}
        >
          <FormOption>W godzinach pracy</FormOption>
          <FormOption>Poza godzinami pracy</FormOption>
          <FormOption>W weekend</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osooba kontrolująca:
        <FormSelect
          value={osobaKontrolujaca}
          onChange={(e) => setOsobaKontrolujaca(e.target.value)}
        >
          {data.control.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormHeader>Kontrola:</FormHeader>
      <FormLabel>
        Czy kontrola została przeprowadzona w zaplanowanym terminie:
        <FormSelect
          value={kontrolaZaplanowanymTerminie}
          onChange={(e) => setKontrolaZaplanowanymTerminie(e.target.value)}
        >
          <FormOption>Tak</FormOption>
          <FormOption>Nie</FormOption>
        </FormSelect>
      </FormLabel>
      {kontrolaZaplanowanymTerminie === "Nie" ? (
        <FormLabel>
          Nowy termin kontroli:
          <FormInput
            value={nowyTerminKontroli}
            onChange={(e) => setNowyTerminKontroli(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormLabel>
        Czy została przeprowadzona w zaplanowanych godzinach
        <FormSelect
          value={kontrolaZaplanowanejGodzinie}
          onChange={(e) => setKontrolaZaplanowanejGodzinie(e.target.value)}
        >
          <FormOption>Tak</FormOption>
          <FormOption>Nie</FormOption>
        </FormSelect>
      </FormLabel>
      {kontrolaZaplanowanejGodzinie === "Nie" ? (
        <FormLabel>
          Nowa godzina kontroli:
          <FormInput
            value={nowaGodzinaKontroli}
            onChange={(e) => setNowaGodzinaKontroli(e.target.value)}
            type="time"
          ></FormInput>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormHeader>Wynik kontroli:</FormHeader>
      <FormLabel>
        Nazwisko trenera:
        <FormInput
          value={nazwiskoTrenera}
          onChange={(e) => setNazwiskoTrenera(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Imię trenera:
        <FormInput
          value={imieTrenera}
          onChange={(e) => setImieTrenera(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Pełna dokumentacja szkoleniowa:
        <FormSelect
          value={pelnaDokumentacja}
          onChange={(e) => setPelnaDokumentacja(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Liczba obecnych uczestników:
        <FormInput
          value={liczbaUczestnikow}
          onChange={(e) => setLiczbaUczestnikow(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Plakat projektowy w widocznym miejscu:
        <FormSelect
          value={plakatProjektowy}
          onChange={(e) => setPlakatProjektowy(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Liczba wypełnionych ankiet:
        <FormInput
          value={liczbaAnkiet}
          onChange={(e) => setLiczbaAnkiet(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Wyniki ankiet:
        <FormInput
          value={wynikiAnkiet}
          onChange={(e) => setWynikiAnkiet(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Czy wymagania jest ponowna kontrola:
        <FormSelect
          value={wymaganaPonownaKontrola}
          onChange={(e) => setWymaganaPonownaKontrola(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
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

export default Training;
