import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../edit/NavElements";

const Nav = () => {
  return (
    <List style={{ justifyContent: "space-evenly" }}>
      <ListElement>
        <NavLink
          to="/panel/dodaj/projekt/dane-podstawowe"
          activeStyle={{ color: "#3699FF", fontWeight: "bold" }}
        >
          Dane podstawowe
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/dodaj/projekt/wykonawcy"
          activeStyle={{ color: "#3699FF", fontWeight: "bold" }}
        >
          Wykonawcy usług
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
