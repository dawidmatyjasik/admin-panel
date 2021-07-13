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

const data = {
  training: ["Szkolenie 1", "Szkoelnie 2", "Szkoelnie 3"],
  id: ["Numer 1", "Numer 2", "Numer 3"],
};

const Traning = () => {
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
    </Form>
  );
};

export default Traning;
