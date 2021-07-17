import React from "react";
import { BasicContainer } from "../ProjectsElements";
import List from "./List";
import Inputs from "./Inputs";

const Basic = ({ podstawowe }) => {
  return (
    <BasicContainer>
      <List />
      <Inputs podstawowe={podstawowe} />
    </BasicContainer>
  );
};

export default Basic;
