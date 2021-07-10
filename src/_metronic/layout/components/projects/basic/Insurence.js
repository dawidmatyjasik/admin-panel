import React from "react";
import { useState } from "react";
import {
  BasicFormInput,
  BasicFormLabel,
  BasicFormOption,
  BasicFormSelect,
  InsurenceHeader,
} from "../ProjectsElements";

const Insurence = ({ enterprise }) => {
  const [business, setBusiness] = useState("");
  return (
    <>
      <InsurenceHeader>Dane pracodawcy:</InsurenceHeader>
      <BasicFormLabel>
        Nazwa firmy:
        <BasicFormInput type="text"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Adres firmy:
        <BasicFormInput type="text"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Stanowisko pracy u pracodawcy:
        <BasicFormInput type="text"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Klasyfikacja zawodów:
        <BasicFormSelect>
          <BasicFormOption>Brak</BasicFormOption>
        </BasicFormSelect>
      </BasicFormLabel>
      <BasicFormLabel>
        Okres zatrudnienia od:
        <BasicFormInput type="date"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Okres zatrudnienia do:
        <BasicFormInput type="date"></BasicFormInput>
      </BasicFormLabel>
      <BasicFormLabel>
        Rodzaj przedsiębiorstwa:
        <BasicFormSelect
          onChange={(e) => setBusiness(e.target.value)}
          value={business}
        >
          {enterprise.map((item) => (
            <BasicFormOption key={item}>{item}</BasicFormOption>
          ))}
        </BasicFormSelect>
      </BasicFormLabel>
      {(() => {
        if (business === "Własna") {
          return (
            <BasicFormLabel>
              NIP:
              <BasicFormInput type="tel"></BasicFormInput>
            </BasicFormLabel>
          );
        } else if (business === "Inne") {
          return (
            <BasicFormLabel>
              Jakie:
              <BasicFormInput type="text"></BasicFormInput>
            </BasicFormLabel>
          );
        } else {
          return <></>;
        }
      })()}
    </>
  );
};

export default Insurence;
