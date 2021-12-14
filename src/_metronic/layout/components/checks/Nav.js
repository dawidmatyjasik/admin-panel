import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../projects/ProjectsElements";
const Nav = () => {
  return (
    <List style={{ justifyContent: "space-evenly" }}>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrole/szkolenie"
          activeStyle={{ fontWeight: "bold" }}
        >
          Kontrola szkolenia
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrole/staz"
          activeStyle={{ fontWeight: "bold" }}
        >
          Kontrole stażu
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrole/szkolenie-dojazd"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zwrot kosztów za dojazd - szkolenie
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrole/staz-dojazd"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zwrot kosztów za dojazd - staż
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrole/szkolenie-opieka"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zwrot kosztów za opieki - szkolenie
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrole/staz-opieka"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zwrot kosztów za opieki - staż
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
