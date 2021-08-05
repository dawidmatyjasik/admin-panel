import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListElement } from "../../projects/ProjectsElements";
const Nav = () => {
  return (
    <List>
      <ListElement>
        <NavLink
          to="/panel/dodaj/projekt/wykonawcy/doradztwo"
          activeStyle={{ fontWeight: "bold" }}
        >
          Doradztwo zawodowe i pośrednictwo pracy
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/dodaj/projekt/wykonawcy/catering"
          activeStyle={{ fontWeight: "bold" }}
        >
          Catering
        </NavLink>
      </ListElement>
      <ListElement>
        <NavLink
          to="/panel/dodaj/projekt/wykonawcy/szkolenia"
          activeStyle={{ fontWeight: "bold" }}
        >
          Szkolenia
        </NavLink>
      </ListElement>
    </List>
  );
};

export default Nav;
