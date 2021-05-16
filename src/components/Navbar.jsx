import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="navbarItem" exact to="/">
        Home
      </NavLink>
      <NavLink className="navbarItem" exact to="/unitsPage">
        Units
      </NavLink>
    </div>
  );
};

export default Navbar;
