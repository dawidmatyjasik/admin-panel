import React from "react";
import { BasicContainer } from "../ProjectsElements";
import List from "./List";
import { makeStyles } from "@material-ui/core";
import Inputs from "./Inputs";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    margin: theme.spacing(1),
  },
}));

const Basic = () => {
  const classes = useStyles();
  return (
    <BasicContainer>
      <List />
      <Inputs />
    </BasicContainer>
  );
};

export default Basic;
