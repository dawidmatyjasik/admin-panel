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
import { useState } from "react";

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

export default function Personal({ osobowe }) {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [nazwisko, setNazwisko] = useState("");
  const [imie, setImie] = useState("");
  const [pesel, setPesel] = useState("");
  const [dataUrodzenia, setDataUrodzenia] = useState("");
  const [miejsceUrodzenia, setMiejsceUrodzenia] = useState("");
  const [plec, setPlec] = useState("");
  const [telefon, setTelefon] = useState("");
  const [mail, setMail] = useState("");
  const [adres, setAdres] = useState("");
  const [czarnaLista, setCzarnaLista] = useState(false);
  const [projekt, setProjekt] = useState("");

  console.log(nazwisko, dataUrodzenia, czarnaLista, projekt);

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="surname"
        label="Nazwisko"
        className={classes.textField}
        margin="normal"
        value={nazwisko}
        onChange={(e) => setNazwisko(e.target.value)}
      />
      <TextField
        required
        id="name"
        label="Imię"
        className={classes.textField}
        margin="normal"
        value={imie}
        onChange={(e) => setImie(e.target.value)}
      />
      <TextField
        required
        id="pesel"
        label="Pesel"
        className={classes.textField}
        margin="normal"
        value={pesel}
        onChange={(e) => setPesel(e.target.value)}
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
        value={dataUrodzenia}
        onChange={(e) => setDataUrodzenia(e.target.value)}
      />
      <TextField
        required
        id="place"
        label="Miejsce urodzenia"
        className={classes.textField}
        margin="normal"
        value={miejsceUrodzenia}
        onChange={(e) => setMiejsceUrodzenia(e.target.value)}
      />
      <FormControl
        component="fieldset"
        className={classes.formControl}
        required
        value={plec}
        onChange={(e) => setPlec(e.target.value)}
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
        value={telefon}
        onChange={(e) => setTelefon(e.target.value)}
      />
      <TextField
        id="mail"
        label="E-mail"
        className={classes.textField}
        margin="normal"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <TextField
        id="adress"
        label="Adres zamieszkania"
        className={classes.textField}
        margin="normal"
        value={adres}
        onChange={(e) => setAdres(e.target.value)}
      />
      <FormControlLabel
        control={<Switch color="primary" />}
        label="Czarna lista"
        labelPlacement="start"
        className={classes.switch}
        value={czarnaLista}
        onChange={(e) => setCzarnaLista(!czarnaLista)}
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
        value={projekt}
        onChange={(e) => setProjekt(e.target.value)}
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
