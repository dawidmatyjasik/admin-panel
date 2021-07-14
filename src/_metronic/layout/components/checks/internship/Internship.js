import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
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

const Internship = () => {
  return (
    <Form>
      <AutoComplete />
    </Form>
  );
};

export default Internship;
