import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
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
} from "../../../projects/ProjectsElements";

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

const data = {
  trener: ["Trener1", "Trener2", "Trener3", "Trener4"],
  egzaminator: ["Egzaminator1", "Egzaminator2", "Egzaminator3"],
};

const Training = () => {
  const classes = useStyles();
  return (
    <Form>
      <FormLabel>
        Nazwa szkolenia:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer grupy:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Wykonawca szkolenia:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwa firmy:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer mieszkania:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Numer umowy:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Data umowy:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Umowa powierzania danych:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Umowa zgłoszona do WUP:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Data zgłoszenia:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Podwykonawca szkolenia:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwa firmy:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Kod pocztowy
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Miasto:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Ulica
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer mieszkania:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Dodaj trenera:
        <FormSelect>
          {data.trener.map((item) => (
            <FormOption>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Dodaj egzaminatora:
        <FormSelect>
          {data.egzaminator.map((item) => (
            <FormOption>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Termin szkolenia:
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
        Rekomendacje:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormFlexContainer>
        <Button variant="outlined" className={classes.button}>
          Zakończ szkolenie
        </Button>
        <Button type="submit" variant="outlined" className={classes.button}>
          Zapisz
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Training;
