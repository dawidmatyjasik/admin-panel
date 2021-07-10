import React, { useState } from "react";
import {
  BasicForm,
  BasicFormInput,
  BasicFormLabel,
  BasicFormOption,
  BasicFormSelect,
} from "../ProjectsElements";
import Insurence from "./Insurence";

const data = {
  education: [
    "Podstawowe",
    "Gimnazjalne",
    "Ponadgimazjalne",
    "Policealne",
    "Wyższe",
  ],
  disability: [
    "Brak",
    "Stopień lekki",
    "Stopień umiarkowany",
    "Stopień znaczny",
    "Odmowa podania informacji",
  ],
  choose: ["Nie", "Tak", "Odmowa podania informacji"],
  enterprise: [
    "Administracja rządowa",
    "Administracja samorządowa",
    "Duże przedsiębiorstwo",
    "MMŚP",
    "Organizacja pozarządowa",
    "Własna",
    "Inne",
  ],
};

export default function Inputs() {
  const [insurance, setInsurance] = useState(false);

  return (
    <BasicForm>
      <BasicFormLabel>
        Data złożenia formularza zgłoszeniowego:
        <BasicFormInput type="date"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Data podpisania umowy w projekcie:
        <BasicFormInput type="date"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Wiek w momencie przystąpienia:
        <BasicFormInput type="number"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Wykształecnie deklarowane w projekcie:
        <BasicFormSelect>
          {data.education.map((item) => (
            <BasicFormOption key={item}>{item}</BasicFormOption>
          ))}
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Niepełnosprawność:
        <BasicFormSelect>
          {data.disability.map((item) => (
            <BasicFormOption key={item}>{item}</BasicFormOption>
          ))}
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Status na rynku pracy:
        <BasicFormSelect>
          <BasicFormOption>Osoba pracująca</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Liczba miesięcy bezrobocia:
        <BasicFormInput type="number"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Numer konta bankowego:
        <BasicFormInput type="tel"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Należy do mniejszości narodowej, etnicznej, migrant, osoba obcego
        pochodzenia:
        <BasicFormSelect>
          <BasicFormOption>Nie</BasicFormOption>
          <BasicFormOption>Tak</BasicFormOption>
          <BasicFormOption>Nie dotyczny</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Osoba bezdomna lub dotknięta wykluczeniem dostępu do mieszkań
        <BasicFormSelect>
          <BasicFormOption>Nie</BasicFormOption>
          <BasicFormOption>Tak</BasicFormOption>
          <BasicFormOption>Nie dotyczny</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Znajduje się w innej niekorzystnej sytuacji społecznej:
        <BasicFormSelect>
          <BasicFormOption>Nie</BasicFormOption>
          <BasicFormOption>Tak</BasicFormOption>
          <BasicFormOption>Nie dotyczny</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Były uczestnik w ramach CT 9:
        <BasicFormSelect>
          <BasicFormOption>Nie</BasicFormOption>
          <BasicFormOption>Tak</BasicFormOption>
          <BasicFormOption>Nie dotyczny</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Osoba odbywająca karę pozbawiena wolności:
        <BasicFormSelect>
          <BasicFormOption>Nie</BasicFormOption>
          <BasicFormOption>Tak</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Osoba odchodząca z rolnictwa:
        <BasicFormSelect>
          <BasicFormOption>Nie</BasicFormOption>
          <BasicFormOption>Tak</BasicFormOption>
          <BasicFormOption>Nie dotyczny</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Czy uczestnik ma inny tytuł do ubezpieczeń społecznych:
        <BasicFormSelect
          onChange={(e) => setInsurance(e.target.value)}
          value={insurance}
        >
          <BasicFormOption>Nie</BasicFormOption>
          <BasicFormOption>Tak</BasicFormOption>
          <BasicFormOption>Nie dotyczny</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      {insurance === "Tak" ? (
        <Insurence enterprise={data.enterprise}></Insurence>
      ) : (
        <></>
      )}
    </BasicForm>
  );
}
