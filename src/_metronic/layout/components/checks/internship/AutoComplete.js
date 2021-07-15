import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";

const data = {
  projects: ["Projekt komercyjny", "Ćwiczenie integracyjne", "Zadanie domowe"],
  place: ["Szkoła", "Szpital", "Urząd"],
  city: ["Warsaw", "Kraków", "Gdańsk", "Osiek"],
  street: ["Kulturowa", "Plebańska", "Ogrodowa", "Zamkowa"],
};

const useStyles = makeStyles((theme) => ({
  input: {
    width: "calc(30% + 24.5% + 10px)",
    marginBottom: "1%",
    "@media (max-width: 1000px)": {
      width: "calc(30% + 38.5% + 10px)",
    },
    "@media (max-width: 500px)": {
      width: "calc(30% + 52.5% + 10px)",
    },
  },
}));

const AutoComplete = () => {
  const classes = useStyles();
  return (
    <>
      <Autocomplete
        options={data.projects}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Projekt"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <Autocomplete
        options={data.place}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Miejsce odbywania stażu"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <Autocomplete
        options={data.city}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Miasto"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <Autocomplete
        options={data.street}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ulica"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
    </>
  );
};

export default AutoComplete;
