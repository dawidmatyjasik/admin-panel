import React from "react";
import { useState } from "react";
import {
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
  FormHeader,
} from "../ProjectsElements";

const Insurence = ({ enterprise }) => {
  const [business, setBusiness] = useState("");
  return (
    <>
      <FormHeader>Dane pracodawcy:</FormHeader>
      <FormLabel>
        Nazwa firmy:
        <FormInput type="text"></FormInput>
      </FormLabel>
      <FormLabel>
        Adres firmy:
        <FormInput type="text"></FormInput>
      </FormLabel>
      <FormLabel>
        Stanowisko pracy u pracodawcy:
        <FormInput type="text"></FormInput>
      </FormLabel>
      <FormLabel>
        Klasyfikacja zawodów:
        <FormSelect>
          <FormOption>Brak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Okres zatrudnienia od:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Okres zatrudnienia do:
        <FormInput type="date"></FormInput>
      </FormLabel>
      <FormLabel>
        Rodzaj przedsiębiorstwa:
        <FormSelect
          onChange={(e) => setBusiness(e.target.value)}
          value={business}
        >
          {enterprise.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      {(() => {
        if (business === "Własna") {
          return (
            <FormLabel>
              NIP:
              <FormInput type="tel"></FormInput>
            </FormLabel>
          );
        } else if (business === "Inne") {
          return (
            <FormLabel>
              Jakie:
              <FormInput type="text"></FormInput>
            </FormLabel>
          );
        } else {
          return <></>;
        }
      })()}
    </>
  );
};

export default Insurence;
