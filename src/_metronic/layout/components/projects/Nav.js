import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "./ProjectsElements";
const Nav = () => {
  return (
    <List>
      <ListElement>
        <NavLink
          to="/edytuj/dane-projektowe/podstawowe"
          activeStyle={{ fontWeight: "bold" }}
        >
          Dane podstawowe
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/edytuj/dane-projektowe/doradztwo"
          activeStyle={{ fontWeight: "bold" }}
        >
          Doradztwo zawodowe
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/edytuj/dane-projektowe/szkolenie"
          activeStyle={{ fontWeight: "bold" }}
        >
          Szkolenie
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/edytuj/dane-projektowe/posrednictwo"
          activeStyle={{ fontWeight: "bold" }}
        >
          Pośrednictwo pracy
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/edytuj/dane-projektowe/staz"
          activeStyle={{ fontWeight: "bold" }}
        >
          Staż
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/edytuj/dane-projektowe/zatrudnienie"
          activeStyle={{ fontWeight: "bold" }}
        >
          Podjęcie zatrudnienia
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/edytuj/dane-projektowe/udzial"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zakończenie udziału w projekcie
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
