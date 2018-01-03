import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../images/bitregret.png";

const Navbar = () => {
  return(
    <nav className="container navbar fixed-top">
      <NavLink className="navbar-brand" to="./">
        <img src={logo} width="50" height="50"  alt="" />
        <h2 className="inlinediv font">&nbsp; Bit Regret</h2>
      </NavLink>
      <NavLink className="nav-item" to="/chart">
        CryptoCurrencies
      </NavLink>
    </nav>
  );
}

export default Navbar;
