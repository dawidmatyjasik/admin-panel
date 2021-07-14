import React, { useState } from "react";
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

const data = {
  training: ["Szkolenie 1", "Szkoelnie 2", "Szkoelnie 3"],
  id: ["Numer 1", "Numer 2", "Numer 3"],
};
// scholarship, access, care
const Traning = () => {
  const [scholarship, setScholarship] = useState("");
  const [access, setAccess] = useState("");
  const [care, setCare] = useState("");
  return (
    <Form>
      <FormLabel>
        Nazwa szkolenia:
        <FormSelect>
          {data.training.map((item) => (
            <ormOption key={item}>{item}</ormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Numer grupy:
        <FormSelect>
          {data.id.map((item) => (
            <ormOption key={item}>{item}</ormOption>
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
        Łączna liczba godzin szkolenia:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormHeader>Trener:</FormHeader>
      <FormLabel>
        Imię:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwisko:
        <FormInput></FormInput>
      </FormLabel>
      <FormHeader>Egzaminator:</FormHeader>
      <FormLabel>
        Imię:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwisko:
        <FormInput></FormInput>
      </FormLabel>
      <FormLabel>
        Miejsce szkolenia:
        <FormInput></FormInput>
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
        Badania psychologiczne:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Badania sanepid:
        <FormSelect>
          <FormOption>Pozytywny</FormOption>
          <FormOption>Negatywny</FormOption>
          <FormOption>Nie dotyczy</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Zgłoszenie do ZUS:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Wygłoszenie ZUS::
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Ubezpieczenie NNW:
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
        Czy szkolenie podnosi kompetencje cyfrowe:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Liczba godzin obecności na szkoleniu:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Czy UP ukończył szkolenie:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Czy UP uzyskał kwalifikację:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormHeader>Rozliczenie szkolenia:</FormHeader>
      <FormLabel>
        Liczba godzin do wyliczenia składek ZUS:
        <FormInput type="number"></FormInput>
      </FormLabel>
      <FormLabel>
        Czy UP ma inny tytuł ZUS:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Czy UP ukończył szkolenie:
        <FormSelect>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Stypendium:
        <FormSelect onChange={(e) => setScholarship(e.target.value)}>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      {scholarship === "Tak" ? (
        <FormLabel style={{ alignItems: "center" }}>
          Data:
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
      ) : (
        <></>
      )}
      <FormLabel>
        Zwrot kosztów dojazdu:
        <FormSelect onChange={(e) => setAccess(e.target.value)}>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      {access === "Tak" ? (
        <FormLabel style={{ alignItems: "center" }}>
          Data:
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
      ) : (
        <></>
      )}
      <FormLabel>
        Zwrot kosztów opieki:
        <FormSelect onChange={(e) => setCare(e.target.value)}>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      {care === "Tak" ? (
        <FormLabel style={{ alignItems: "center" }}>
          Data:
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
      ) : (
        <></>
      )}
    </Form>
  );
};

export default Traning;
