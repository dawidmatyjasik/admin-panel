import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [project, setProject] = useState("");
  const [id, setId] = useState("");
  const [group, setGroup] = useState("");
  const [school, setSchool] = useState("");
  const [surname, setSurname] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "project":
        setProject(e.target.value);
        break;
      case "id":
        setId(e.target.value);
        break;
      case "group":
        setGroup(e.target.value);
        break;
      case "school":
        setSchool(e.target.value);
        break;
      case "surname":
        setSurname(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="project"
        label="Projekt"
        className={classes.textField}
        value={project}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="id"
        label="Pesel"
        className={classes.textField}
        value={id}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="group"
        label="Grupa"
        className={classes.textField}
        value={group}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="school"
        label="Szkolenie"
        className={classes.textField}
        value={school}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="surname"
        label="Nazwisko"
        className={classes.textField}
        value={surname}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}
