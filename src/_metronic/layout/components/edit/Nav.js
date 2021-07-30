import React from "react";
import { List, ListElement } from "./NavElements";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <List>
      <ListElement>
        <NavLink
          to="/panel/edytuj/dane-osobowe"
          activeStyle={{ color: "#3699FF", fontWeight: "bold" }}
        >
          Dane osobowe
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/edytuj/dane-projektowe"
          activeStyle={{ color: "#3699FF", fontWeight: "bold" }}
        >
          Dane projektowe
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrola"
          activeStyle={{ color: "#3699FF", fontWeight: "bold" }}
        >
          Kontrole
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
