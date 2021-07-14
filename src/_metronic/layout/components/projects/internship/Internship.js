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
  FormSubHeader,
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

const Internship = () => {
  const classes = useStyles();
  return (
    <Form>
      <FormHeader>Pracodawca:</FormHeader>
      <FormLabel>
        Ubezpieczenie NNW do kiedy:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Data podpisania umowy stażowej:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Staż:
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
        Przedłużenie stażu do:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Badania medycyna pracy:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Badania sanepid:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Nazwa pracodawcy:
        <FormInput></FormInput>
      </FormLabel>
      <FormHeader>Adres pracodawcy:</FormHeader>
      <FormLabel>
        Kod pocztowy:
        <FormInput type="tel"></FormInput>
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
        Numer:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormHeader>Miejsce odbywania stażu:</FormHeader>
      <FormLabel>
        Kod pocztowy:
        <FormInput type="tel"></FormInput>
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
        Numer:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        NIP:
        <FormInput type="tel"></FormInput>
      </FormLabel>
      <FormLabel>
        Stanowisko na stażu:
        <FormInput></FormInput>
      </FormLabel>
      <FormHeader>Opiekun stażu:</FormHeader>
      <FormLabel>
        E-mail
        <FormInput type="mail"></FormInput>
      </FormLabel>
      <FormLabel>
        Telefon:
        <FormInput type="tel"></FormInput>
      </FormLabel>
      <FormLabel>
        Wymiar godzin czasu pracy:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Godziny stażu
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
      <FormFlexContainer>
        <Button variant="outlined" className={classes.button}>
          Dodaj pracodawcę
        </Button>
        <Button type="submit" variant="outlined" className={classes.button}>
          Zaplanuj kontrolę stażu
        </Button>
      </FormFlexContainer>
      <FormHeader>Rozliczenie stażu:</FormHeader>
      <FormLabel>
        Liczba dni urlopu:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Pozostałe dni urlopu:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Wybierz urlop:
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
        Wybrane dni urlopu:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <Button type="submit" variant="outlined" className={classes.button}>
        Dodaj urlop
      </Button>
      <FormHeader>Stypendia:</FormHeader>
      <FormLabel>
        Zgłoszenie do ZUS:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Wygłoszenie ZUS:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormSubHeader>Miesiąc 1:</FormSubHeader>
      <FormLabel style={{ alignItems: "center" }}>
        Stypendium:
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
        Liczba dni przepracowanych:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Liczba dni do wyliczenia składek ZUS:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Wypłacono stypendium:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Uwagi:
        <FormInput></FormInput>
      </FormLabel>
      <Button type="submit" variant="outlined" className={classes.button}>
        Dodaj miesiąc
      </Button>
    </Form>
  );
};

export default Internship;
