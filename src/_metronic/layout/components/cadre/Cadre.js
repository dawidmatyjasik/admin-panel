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
    marginRight: "2%",

    "&:nth-child(1)": {},
    "@media (max-width: 1000px)": {
      width: "30%",
    },
    "@media (max-width: 500px)": {
      width: "35%",
    },
  },
}));

const Cadre = () => {
  const classes = useStyles();
  return (
    <>
      <Form>
        <FormHeader>Dane:</FormHeader>
        <FormLabel>
          Imię:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Nazwisko:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Funkcja 1.
          <FormSelect>
            <FormOption>Doradca zawodowy</FormOption>
            <FormOption>Trener</FormOption>
            <FormOption>Pośrednik pracy</FormOption>
            <FormOption>Coach</FormOption>
            <FormOption>Psycholog</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Funkcja 2.
          <FormSelect>
            <FormOption>Doradca zawodowy</FormOption>
            <FormOption>Trener</FormOption>
            <FormOption>Pośrednik pracy</FormOption>
            <FormOption>Coach</FormOption>
            <FormOption>Psycholog</FormOption>
          </FormSelect>
        </FormLabel>
        <FormHeader>Zawarte umowy:</FormHeader>
        <FormLabel>
          Podmiot:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel style={{ alignItems: "center" }}>
          Czas trwania umowy:
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
          Numer umowy:
          <FormInput type="number"></FormInput>
        </FormLabel>
        <FormLabel>
          Zakres umowy
          <FormSelect>
            <FormOption>Doradztwo zawodowe</FormOption>
            <FormOption>Pośrednictwo pracy</FormOption>
            <FormOption>Usługi szkoleniowe</FormOption>
          </FormSelect>
        </FormLabel>
        <Button variant="outlined" className={classes.button}>
          Dodaj podmiot
        </Button>
      </Form>
    </>
  );
};

export default Cadre;
