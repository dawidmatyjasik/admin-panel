import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  const classes = useStyles();
  return (
    <Form>
      <FormLabel>
        Kontynuacja zatrudnienia u dotychczasowego pracodawcy:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Zmiana formy zatrudnienia:
        <FormSelect>
          <FormOption>Zwiększenie stawki (awans finansowy)</FormOption>
          <FormOption>Awans stanowiskowy</FormOption>
          <FormOption>
            Przejście z niepwengo do stabilnego zatrudnienia
          </FormOption>
          <FormOption>
            Przejście z niepełnego do stabilnego zatrudnienia
          </FormOption>
          <FormOption>
            Zmiana pracy na inną wymagająca wyższych kompetencji, umiejętności,
            kwalifikacji
          </FormOption>
          <FormOption>Zmiana pracy na wyżej wynagradzaną</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Uwagi:
        <FormInput></FormInput>
      </FormLabel>
      <FormHeader>Zatrudnienie:</FormHeader>
      <FormLabel>
        Data ostatniej formy wsparcia:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Wskaźnik do 4 tygodni
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Wskaźnik do 3 miesięcy:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Data podpisania umowy:
        <FormInput type="date"></FormInput>
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
        Rodzaj umowy:
        <FormSelect>
          <FormOption>O pracę</FormOption>
          <FormOption>Umowa zlecenie</FormOption>
          <FormOption>Omowa o dzieło</FormOption>
          <FormOption>Działalność gospodarcza:</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Wymiar etatu:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Umowa wskaźnikowa:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormHeader>Pracodawca:</FormHeader>
      <FormLabel>
        Nazwa firmy:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy:
        <FormInput type="tel"></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <Button type="submit" variant="outlined" className={classes.button}>
        Dodaj pracodawcę
      </Button>
    </Form>
  );
};

export default Employment;
