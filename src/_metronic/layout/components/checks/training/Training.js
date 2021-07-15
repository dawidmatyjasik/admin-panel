import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {
  Form,
  FormHeader,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
} from "../../projects/ProjectsElements";
import AutoComplete from "./AutoComplete";

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

const data = {
  control: [
    "Jacek Nowak",
    "Andrzej Brońka",
    "Zbigniew Wodecki",
    "Krzysztof Liszka",
  ],
};

const Training = () => {
  const [hours, setHours] = useState("Tak");
  const [term, setTerm] = useState("Tak");
  const classes = useStyles();
  return (
    <Form>
      <AutoComplete />
      <FormLabel>
        Data szkolenia:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Miejsce szkolenia:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Trener:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Liczba osób w grupie:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormHeader>Plan kontroli:</FormHeader>
      <FormLabel>
        Data planowanej kontroli:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Dzień tygodnia:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Godziny planowanej kontroli:
        <FormSelect>
          <FormOption>W godzinach pracy</FormOption>
          <FormOption>Poza godzinami pracy</FormOption>
          <FormOption>W weekend</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osooba kontrolująca:
        <FormSelect>
          {data.control.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormHeader>Kontrola:</FormHeader>
      <FormLabel>
        Czy kontrola została przeprowadzona w zaplanowanym terminie:
        <FormSelect value={term} onChange={(e) => setTerm(e.target.value)}>
          <FormOption>Tak</FormOption>
          <FormOption>Nie</FormOption>
        </FormSelect>
      </FormLabel>
      {term === "Nie" ? (
        <FormLabel>
          Nowy termin kontroli:
          <FormInput type="date"></FormInput>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormLabel>
        Czy została przeprowadzona w zaplanowanych godzinach
        <FormSelect value={hours} onChange={(e) => setHours(e.target.value)}>
          <FormOption>Tak</FormOption>
          <FormOption>Nie</FormOption>
        </FormSelect>
      </FormLabel>
      {hours === "Nie" ? (
        <FormLabel>
          Nowa godzina kontroli:
          <FormInput type="time"></FormInput>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormHeader>Wynik kontroli:</FormHeader>
      <FormLabel>
        Nazwisko trenera:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Imię trenera:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Pełna dokumentacja szkoleniowa:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Liczba obecnych uczestników:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Plakat projektowy w widocznym miejscu:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Liczba wypełnionych ankiet:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Wyniki ankiet:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Czy wymagania jest ponowna kontrola:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <Button type="submit" variant="outlined" className={classes.button}>
        Zapisz
      </Button>
    </Form>
  );
};

export default Training;
