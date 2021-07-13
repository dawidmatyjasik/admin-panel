import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import {
  Form,
  FormHeader,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
} from "../ProjectsElements";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "3%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
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
        <div>
          <span style={{ marginLeft: "10px" }}>od:</span>
          <FormInput type="time"></FormInput>
          <br />
          <span style={{ marginLeft: "10px" }}>do:</span>
          <FormInput type="time"></FormInput>
        </div>
      </FormLabel>
      <div style={{ display: "flex" }}>
        <Button variant="outlined" className={classes.button}>
          Dodaj kolejną sesję
        </Button>
        <Button variant="outlined" className={classes.button}>
          Zapisz
        </Button>
      </div>
    </Form>
  );
};

export default Consulting;
