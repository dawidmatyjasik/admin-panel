import { Button, makeStyles } from "@material-ui/core";
import React from "react";
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
    marginTop: "3%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    "&:nth-child(1)": {
      marginRight: "2%",
    },
  },
}));

const data = { consulting: ["Doradca 1", "Doradca 2", "Doradca 3"] };

const Consulting = () => {
  const classes = useStyles();
  return (
    <Form>
      <FormHeader>Sesja I</FormHeader>
      <FormLabel>
        Wykształecnie deklarowane w projekcie:
        <FormSelect>
          {data.consulting.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Pełny adres miejsca doradztwa:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Data spotkania:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Godziny spotkania:
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput type="time"></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput type="time"></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Czas trwania spotkania:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormFlexContainer>
        <Button variant="outlined" className={classes.button}>
          Dodaj kolejną sesję
        </Button>
        <Button type="submit" variant="outlined" className={classes.button}>
          Zapisz
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Consulting;
