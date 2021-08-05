import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../edit/NavElements";

const Nav = () => {
  return (
    <List style={{ justifyContent: "space-evenly" }}>
      <ListElement>
        <NavLink
          to="/panel/wyplaty/szkolenie"
          activeStyle={{ color: "#3699FF", fontWeight: "bold" }}
        >
          Wypłaty za szkolenie
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/wyplaty/staz"
          activeStyle={{ color: "#3699FF", fontWeight: "bold" }}
        >
          Wypłaty za staż
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
