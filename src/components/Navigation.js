import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <NavLink exact to="/" activeClassName="selected-navlink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/battle" activeClassName="selected-navlink">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink to="/popular" activeClassName="selected-navlink">
          Popular
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
