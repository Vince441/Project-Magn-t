import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  function determineActive({ isActive }) {
    if (isActive === true) {
      return "active";
    } else return "";
  }

  return (
    <div className={"header"}>
      <NavLink to="/" className={determineActive}>
        Accueil
      </NavLink>
      <NavLink to="/presentation" className={determineActive} >Présentation</NavLink>
      <NavLink to="prestation" className={determineActive}>Préstation & Service</NavLink>
      <NavLink to="contact" className={determineActive}>Contact</NavLink>
    </div>
  );
};

export default Header;
