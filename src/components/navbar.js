import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () =>{
  return(
    <nav className="navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand text-white" to="./"><h3>Bit Regret</h3></NavLink>
    </nav>
  );
}

export default Navbar
