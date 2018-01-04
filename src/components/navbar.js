import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../images/bitregret.png";

const Navbar = () => {
  return(
    <nav className="container navbar navbar-expand-lg navbar-dark fixed-top">
      <NavLink className="navbar-brand" to="./">
        <img src={logo} width="50" height="50"  alt="" />
        <h2 className="inlinediv font">&nbsp;Bit Regret</h2>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/chart">CryptoCurrencies</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
