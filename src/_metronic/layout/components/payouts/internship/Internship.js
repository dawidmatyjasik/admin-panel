import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Form,
  FormDateContainer,
  FormInput,
  FormSpan,
  FormLabel,
  FromDateWrapper,
  FormFlexContainer,
} from "../../projects/ProjectsElements";

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

const Internship = () => {
  const classes = useStyles();

  return (
    <Form>
      <FormLabel>
        Projekt:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Szkolenie:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Numer grupy:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Projekt:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Okres rozliczeniowy
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
        Numer listy płac:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Data wystawienia listy:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormFlexContainer>
        <Button variant="outlined" className={classes.button}>
          Podgląd wydruku
        </Button>
        <Button variant="outlined" className={classes.button}>
          Drukuj
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Internship;
