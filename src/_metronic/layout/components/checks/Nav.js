import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../projects/ProjectsElements";
const Nav = () => {
  return (
    <List style={{ justifyContent: "space-evenly" }}>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrola/szkolenie"
          activeStyle={{ fontWeight: "bold" }}
        >
          Kontrola szkolenia
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/edytuj/kontrola/staz"
          activeStyle={{ fontWeight: "bold" }}
        >
          Kontrole stażu
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
