import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../../projects/ProjectsElements";
const NavTraining = () => {
  return (
    <List>
      <ListElement>
        <NavLink
          to="/panel/wyplaty/szkolenie/lista-plac"
          activeStyle={{ fontWeight: "bold" }}
        >
          Lista płac
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/wyplaty/szkolenie/dojazd"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zwrot kosztów dojazdu
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/wyplaty/szkolenie/opieka"
          activeStyle={{ fontWeight: "bold" }}
        >
          Zwrot kosztów opieki
        </NavLink>
      </ListElement>
    </List>
  );
};

export default NavTraining;
