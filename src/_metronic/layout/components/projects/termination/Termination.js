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

const Termination = () => {
  const classes = useStyles();
  return (
    <Form>
      <FormLabel>
        Data zakończenia udziału w projekcie:
        <FormInput type="date"></FormInput>
      </FormLabel>
    </Form>
  );
};

export default Termination;
