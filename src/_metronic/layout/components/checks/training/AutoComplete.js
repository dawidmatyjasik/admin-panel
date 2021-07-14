import { TextField } from "@material-ui/core";
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

const AutoComplete = () => {
  return (
    <>
      <Autocomplete
        options={data.projects}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Projekt" variant="outlined" />
        )}
      />
      <Autocomplete
        options={data.training}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Szkolenie" variant="outlined" />
        )}
      />
      <Autocomplete
        options={data.group}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Grupa" variant="outlined" />
        )}
      />
    </>
  );
};

export default AutoComplete;
