import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
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
  const classes = useStyles();
  return (
    <Form>
      <Autocomplete
        options={data.projects}
        style={{ width: "100%" }}
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
            <FormInput type="date"></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput type="date"></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Wymaga ponownej kontroli:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormHeader>Plan kontroli stażu:</FormHeader>
      <FormLabel>
        Data planowanej kontroli:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Dzień tygodnia:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Osoba kontrolująca
        <FormSelect>
          <FormOption>Adam Walczak</FormOption>
          <FormOption>Wojtek Sala</FormOption>
          <FormOption>Janusz Hillman</FormOption>
        </FormSelect>
      </FormLabel>
      <FormHeader>Kontrola:</FormHeader>
      <FormLabel>
        Obecny opiekun stażu:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Nazwisko opiekuna:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Imię opiekuna:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Czy stażysta był obecny w trakcie kontroli:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Wypełniona i podpisana lista obecności:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Plakat projektowy w widocznym miejscu:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Ankieta z kontroli stażu:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Wynik ankiety:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Czy wymagana ponowna kontrola:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Uwagi:
        <FormInput></FormInput>
      </FormLabel>
      <Button type="submit" variant="outlined" className={classes.button}>
        Zaplanuj ponowną kontrolę
      </Button>
    </Form>
  );
};

export default Internship;
