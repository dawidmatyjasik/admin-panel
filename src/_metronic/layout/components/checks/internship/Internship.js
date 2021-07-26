import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
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
} from "../../projects/ProjectsElements";

const data = {
  projects: ["Projekt komercyjny", "Ćwiczenie integracyjne", "Zadanie domowe"],
  place: ["Szkoła", "Szpital", "Urząd"],
  city: ["Warsaw", "Kraków", "Gdańsk", "Osiek"],
  street: ["Kulturowa", "Plebańska", "Ogrodowa", "Zamkowa"],
};

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

const Internship = () => {
  const [kontrola, setKontrola] = useState([]);
  const [projekt, setProjekt] = useState("");
  const [miejsceStazu, setMiejsceStazu] = useState("");
  const [miasto, setMiasto] = useState("");
  const [ulica, setUlica] = useState("");
  const [okresOd, setOkresOd] = useState("");
  const [okresDo, setOkresDo] = useState("");
  const [wymaganaPonownaKontrola, setWymaganaPonownaKontrola] = useState("");
  const [dataKontroli, setDataKontroli] = useState("");
  const [dzienTygodnia, setDzienTygodnia] = useState("");
  const [osobaKontrolujaca, setOsobaKontrolujaca] = useState("");
  const [obecnyOpiekunStazu, setObecnyOpiekunStazu] = useState("");
  const [nazwiskoOpiekuna, setNazwiskoOpiekuna] = useState("");
  const [imieOpiekuna, setImieOpiekuna] = useState("");
  const [obecnyStazysta, setObecnyStazysta] = useState("");
  const [wypelnionaListaObecnosci, setWypelnionaListaObecnosci] = useState("");
  const [plakatProjektowy, setPlakatProjektowy] = useState("");
  const [ankietaStazu, setAnkietaStazu] = useState("");
  const [wynikAnkiety, setWynikAnkiety] = useState("");
  const [uwagi, setUwagi] = useState("");
  const classes = useStyles();

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("kontrola")
      .doc("staz")
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
      setMiejsceStazu(kontrola.miejsceStazu || "");
      setMiasto(kontrola.miasto || "");
      setUlica(kontrola.ulica || "");
      setOkresOd(kontrola.okresOd || "");
      setOkresDo(kontrola.okresDo || "");
      setWymaganaPonownaKontrola(kontrola.wymaganaPonownaKontrola || "");
      setDataKontroli(kontrola.dataKontroli || "");
      setDzienTygodnia(kontrola.dzienTygodnia || "");
      setOsobaKontrolujaca(kontrola.osobaKontrolujaca || "");
      setObecnyOpiekunStazu(kontrola.obecnyOpiekunStazu || "");
      setNazwiskoOpiekuna(kontrola.nazwiskoOpiekuna || "");
      setImieOpiekuna(kontrola.imieOpiekuna || "");
      setObecnyStazysta(kontrola.obecnyStazysta || "");
      setWypelnionaListaObecnosci(kontrola.wypelnionaListaObecnosci || "");
      setPlakatProjektowy(kontrola.plakatProjektowy || "");
      setAnkietaStazu(kontrola.ankietaStazu || "");
      setWynikAnkiety(kontrola.wynikAnkiety || "");
      setUwagi(kontrola.uwagi || "");
    }
  }, [kontrola]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("kontrola")
      .doc("staz")
      .set({
        projekt,
        miejsceStazu,
        miasto,
        ulica,
        okresOd,
        okresDo,
        wymaganaPonownaKontrola,
        dataKontroli,
        dzienTygodnia,
        osobaKontrolujaca,
        obecnyOpiekunStazu,
        nazwiskoOpiekuna,
        imieOpiekuna,
        obecnyStazysta,
        wypelnionaListaObecnosci,
        plakatProjektowy,
        ankietaStazu,
        wynikAnkiety,
        uwagi,
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
        options={data.place}
        style={{ width: "100%" }}
        value={miejsceStazu}
        onChange={(event, newValue) => {
          setMiejsceStazu(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Miejsce odbywania stażu"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <Autocomplete
        options={data.city}
        style={{ width: "100%" }}
        value={miasto}
        onChange={(event, newValue) => {
          setMiasto(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Miasto"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <Autocomplete
        options={data.street}
        style={{ width: "100%" }}
        value={ulica}
        onChange={(event, newValue) => {
          setUlica(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ulica"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <FormLabel style={{ alignItems: "center" }}>
        Okres
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput
              value={okresOd}
              onChange={(e) => setOkresOd(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput
              value={okresDo}
              onChange={(e) => setOkresDo(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Wymaga ponownej kontroli:
        <FormSelect
          value={wymaganaPonownaKontrola}
          onChange={(e) => setWymaganaPonownaKontrola(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormHeader>Plan kontroli stażu:</FormHeader>
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
        Osoba kontrolująca
        <FormSelect
          value={osobaKontrolujaca}
          onChange={(e) => setOsobaKontrolujaca(e.target.value)}
        >
          <FormOption>Adam Walczak</FormOption>
          <FormOption>Wojtek Sala</FormOption>
          <FormOption>Janusz Hillman</FormOption>
        </FormSelect>
      </FormLabel>
      <FormHeader>Kontrola:</FormHeader>
      <FormLabel>
        Obecny opiekun stażu:
        <FormSelect
          value={obecnyOpiekunStazu}
          onChange={(e) => setObecnyOpiekunStazu(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Nazwisko opiekuna:
        <FormInput
          value={nazwiskoOpiekuna}
          onChange={(e) => setNazwiskoOpiekuna(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Imię opiekuna:
        <FormInput
          value={imieOpiekuna}
          onChange={(e) => setImieOpiekuna(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Czy stażysta był obecny w trakcie kontroli:
        <FormSelect
          value={obecnyStazysta}
          onChange={(e) => setObecnyStazysta(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Wypełniona i podpisana lista obecności:
        <FormSelect
          value={wypelnionaListaObecnosci}
          onChange={(e) => setWypelnionaListaObecnosci(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
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
        Ankieta z kontroli stażu:
        <FormSelect
          value={ankietaStazu}
          onChange={(e) => setAnkietaStazu(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Wynik ankiety:
        <FormInput
          value={wynikAnkiety}
          onChange={(e) => setWynikAnkiety(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Uwagi:
        <FormInput
          value={uwagi}
          onChange={(e) => setUwagi(e.target.value)}
        ></FormInput>
      </FormLabel>
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="outlined"
        className={classes.button}
      >
        Zaplanuj ponowną kontrolę
      </Button>
    </Form>
  );
};

export default Internship;
