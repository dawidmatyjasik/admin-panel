import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import {
  Form,
  FormCheckboxContainer,
  FormCheckboxInput,
  FormCheckboxLabel,
  FormDateContainer,
  FormHeader,
  FormInput,
  FormLabel,
  FormSpan,
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

const Search = () => {
  const classes = useStyles();
  return (
    <Form>
      <FormHeader>Wyszukiwarka:</FormHeader>
      <FormLabel style={{ alignItems: "center" }}>
        Data
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
        Projekt:
        <FormInput></FormInput>
      </FormLabel>
      <FormCheckboxContainer>
        <FormCheckboxLabel>
          Szkolenie:
          <FormCheckboxInput type="checkbox"></FormCheckboxInput>
        </FormCheckboxLabel>
        <FormCheckboxLabel>
          Staż
          <FormCheckboxInput type="checkbox"></FormCheckboxInput>
        </FormCheckboxLabel>
      </FormCheckboxContainer>
      <FormLabel>
        Miasto:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Powiat:
        <FormInput></FormInput>
      </FormLabel>
      <FormCheckboxContainer>
        <FormCheckboxLabel>
          Zaplanowane:
          <FormCheckboxInput type="checkbox"></FormCheckboxInput>
        </FormCheckboxLabel>
        <FormCheckboxLabel>
          Niezaplanowane:
          <FormCheckboxInput type="checkbox"></FormCheckboxInput>
        </FormCheckboxLabel>
        <FormCheckboxLabel>
          Wszystkie:
          <FormCheckboxInput type="checkbox"></FormCheckboxInput>
        </FormCheckboxLabel>
      </FormCheckboxContainer>
      <Button variant="outlined" className={classes.button}>
        Szukaj
      </Button>
      <FormHeader>Wyniki wyszukiwania:</FormHeader>
    </Form>
  );
};

export default Search;
