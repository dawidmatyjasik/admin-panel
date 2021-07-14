import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";

/* const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
];
const projects = [
  { title: "Projekt komercyjny" },
  { title: "Ćwiczenie integracyjne" },
  { title: "Zadanie domowe" },
];
const training = [
  { title: "Szkolenie indywidualne" },
  { title: "Ćwiczenie grupowe" },
  { title: "Trening integracyjny" },
];

const group = [
  { title: "Juniorzy" },
  { title: "Seniorzy" },
  { title: "Emeryci" },
  { title: "Doświadczeni" },
];
 */
const data = {
  projects: ["Projekt komercyjny", "Ćwiczenie integracyjne", "Zadanie domowe"],
  training: [
    "Szkolenie indywidualne",
    "Ćwiczenie grupowe",
    "Trening integracyjny",
  ],
  group: ["Juniorzy", "Seniorzy", "Emeryci", "Doświadczeni"],
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
        options={data.training}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Szkolenie"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
      <Autocomplete
        options={data.group}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Grupa"
            variant="outlined"
            className={classes.input}
          />
        )}
      />
    </>
  );
};

export default AutoComplete;
