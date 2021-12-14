import {
  Button,
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormDateContainer,
  FormHeader,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
  FormSpan,
  FormSubHeader,
  FromDateWrapper,
} from "../projects/ProjectsElements";

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

const Employer = () => {
  const classes = useStyles();
  return (
    <>
      <Form>
        <FormHeader>Firma</FormHeader>
        <FormLabel>
          Nazwa firmy:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Ulica:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Numer budynku/lokalu:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Kod pocztowy:
          <FormInput type="number"></FormInput>
        </FormLabel>
        <FormLabel>
          Miasto:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          NIP:
          <FormInput type="number"></FormInput>
        </FormLabel>
        <FormSubHeader>Osoba kontaktowa</FormSubHeader>
        <FormLabel>
          Imię:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Nazwisko:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Telefon
          <FormInput type="tel"></FormInput>
        </FormLabel>
        <FormLabel>
          Mail:
          <FormInput type="email"></FormInput>
        </FormLabel>
        <FormLabel>
          Branża:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Przyjmują stażystów:
          <FormSelect>
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Klient BUR:
          <FormSelect>
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Klient KFS:
          <FormSelect>
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Klient komercyjny:
          <FormSelect>
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <Button variant="outlined" className={classes.button}>
          Dodaj podmiot
        </Button>
      </Form>
    </>
  );
};

export default Employer;
