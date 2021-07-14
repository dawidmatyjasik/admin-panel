import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import {
  Form,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
} from "../ProjectsElements";
import Insurence from "./Insurence";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "3%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
  },
}));

const data = {
  education: [
    "Podstawowe",
    "Gimnazjalne",
    "Ponadgimazjalne",
    "Policealne",
    "Wyższe",
  ],
  disability: [
    "Brak",
    "Stopień lekki",
    "Stopień umiarkowany",
    "Stopień znaczny",
    "Odmowa podania informacji",
  ],
  choose: ["Nie", "Tak", "Odmowa podania informacji"],
  enterprise: [
    "Administracja rządowa",
    "Administracja samorządowa",
    "Duże przedsiębiorstwo",
    "MMŚP",
    "Organizacja pozarządowa",
    "Własna",
    "Inne",
  ],
};

export default function Inputs() {
  const [insurance, setInsurance] = useState(false);
  const [agreement, setAgreement] = useState("");

  const classes = useStyles();
  return (
    <Form>
      <FormLabel>
        Data złożenia formularza zgłoszeniowego:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Data podpisania umowy w projekcie:
        <FormInput
          type="date"
          value={agreement}
          onChange={(e) => setAgreement(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Wiek w momencie przystąpienia:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Wykształecnie deklarowane w projekcie:
        <FormSelect>
          {data.education.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Niepełnosprawność:
        <FormSelect>
          {data.disability.map((item) => (
            <ormOption key={item}>{item}</ormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Status na rynku pracy:
        <FormSelect>
          <FormOption>Osoba pracująca</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Liczba miesięcy bezrobocia:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Numer konta bankowego:
        <FormInput type="tel"></FormInput>
      </FormLabel>
      <FormLabel>
        Należy do mniejszości narodowej, etnicznej, migrant, osoba obcego
        pochodzenia:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba bezdomna lub dotknięta wykluczeniem dostępu do mieszkań
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Znajduje się w innej niekorzystnej sytuacji społecznej:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Były uczestnik w ramach CT 9:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba odbywająca karę pozbawiena wolności:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba odchodząca z rolnictwa:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Czy uczestnik ma inny tytuł do ubezpieczeń społecznych:
        <FormSelect
          onChange={(e) => setInsurance(e.target.value)}
          value={insurance}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      {insurance === "Tak" ? (
        <Insurence enterprise={data.enterprise}></Insurence>
      ) : (
        <></>
      )}
      <Button type="submit" variant="outlined" className={classes.button}>
        Zapisz
      </Button>
    </Form>
  );
}
