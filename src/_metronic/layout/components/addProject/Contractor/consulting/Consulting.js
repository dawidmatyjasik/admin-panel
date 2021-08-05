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

const Consulting = () => {
  const classes = useStyles();
  return (
    <Form>
      <FormLabel>
        Wykonawca doradztwa i pośrednictwa pracy:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwa firmy:
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
        Ulica
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer
        <FormInput type="number"></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Konsorcjant
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Nazwa firmy:
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
        Ulica:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer domu:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <br />
      <FormLabel>
        Numer umowy:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Data umowy:
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
      <Button type="submit" variant="outlined" className={classes.button}>
        Dodaj projekt
      </Button>
    </Form>
  );
};

export default Consulting;
