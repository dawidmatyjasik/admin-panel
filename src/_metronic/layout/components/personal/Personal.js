import React from "react";
import { makeStyles } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50%",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: "50%",
  },
  formControl: {
    margin: theme.spacing(1.2),
    marginTop: "20px",
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  switch: {
    justifyContent: "flex-end",
    padding: "0",
    margin: "10px 0 0 7.5px",
  },
  submit: {
    width: "20%",
    marginTop: "10px",
    marginLeft: "7.5px",
  },
}));

const project = [
  {
    value: "Projekt1",
  },
  {
    value: "Projekt2",
  },
  {
    value: "Projekt3",
  },
];

export default function TextFields() {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="surname"
        label="Nazwisko"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="name"
        label="Imię"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="pesel"
        label="Pesel"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="born"
        label="Data urodzenia"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        required
        id="place"
        label="Miejsce urodzenia"
        className={classes.textField}
        margin="normal"
      />
      <FormControl
        component="fieldset"
        className={classes.formControl}
        required
      >
        <FormLabel component="legend">Płeć</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Kobieta"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Mężczyzna"
          />
          <FormControlLabel value="other" control={<Radio />} label="Inne" />
        </RadioGroup>
      </FormControl>
      <TextField
        id="number"
        label="Telefon"
        className={classes.textField}
        margin="normal"
        type="tel"
      />
      <TextField
        id="mail"
        label="E-mail"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="adress"
        label="Adres zamieszkania"
        className={classes.textField}
        margin="normal"
      />
      <FormControlLabel
        value="blacklist"
        control={<Switch color="primary" />}
        label="Czarna lista"
        labelPlacement="start"
        className={classes.switch}
      />
      <TextField
        id="project"
        select
        label="Przypisz projekt"
        className={classes.textField}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {project.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        // className={classes.button }
        type="submit"
        className={classes.submit}
        color="secondary"
        onClick={handleSubmit}
      >
        Zapisz
      </Button>
    </form>
  );
}
