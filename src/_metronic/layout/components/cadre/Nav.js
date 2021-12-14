import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../edit/NavElements";

const Nav = () => {
  return (
    <List style={{ justifyContent: "space-evenly" }}>
      <ListElement>
        <NavLink
          to="/panel/kadra"
          activeStyle={{ color: "#3699FF", fontWeight: "bold" }}
        >
          Kadra
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
