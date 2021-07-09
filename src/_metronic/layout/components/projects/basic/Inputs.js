import React from "react";
import { BasicForm, BasicFormInput, BasicFormLabel } from "../ProjectsElements";

export default function Inputs() {
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
    </BasicForm>
  );
}
