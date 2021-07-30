import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../projects/ProjectsElements";

const Nav = () => {
  return (
    <List style={{ justifyContent: "space-evenly" }}>
      <ListElement>
        <NavLink
          to="/panel/dodaj/projekt/dane-podstawowe"
          activeStyle={{ fontWeight: "bold" }}
        >
          Dane podstawowe
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/dodaj/projekt/wykonawcy"
          activeStyle={{ fontWeight: "bold" }}
        >
          Wykonawcy usług
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
