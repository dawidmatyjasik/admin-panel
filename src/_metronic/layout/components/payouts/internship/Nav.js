import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../../projects/ProjectsElements";
const NavInternship = () => {
  return (
    <List>
      <ListElement>
        <NavLink
          to="/panel/wyplaty/staz/list-plac"
          activeStyle={{ fontWeight: "bold" }}
        >
          Lista płac
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/wyplaty/staz/dojazd"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zwrot kosztów dojazdu
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/wyplaty/staz/opieka"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zwrot kosztów opieki
        </NavLink>
      </ListElement>
    </List>
  );
};

export default NavInternship;
