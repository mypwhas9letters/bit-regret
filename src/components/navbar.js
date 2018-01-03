import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/bitregret.png"

const Navbar = () =>{
  return(
    <nav className="container navbar navbar-expand-md fixed-top ">
      <NavLink className="navbar-brand" to="./">
        <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="" />
      </NavLink>
      <NavLink className="nav-item nav-link" to="./">
        Bit Regret
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <NavLink className="nav-item nav-link" to="/chart">CryptoCurrencies <span className="sr-only">(current)</span></NavLink>
          <NavLink className="nav-item nav-link" to="/"></NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
  //
  //   <a class="navbar-brand" href="#">Fixed navbar</a>
  //
  //       <li class="nav-item active">
  //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link" href="#">Link</a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link disabled" href="#">Disabled</a>
  //       </li>
  //
  //     <form class="form-inline mt-2 mt-md-0">
  //       <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
  //       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //     </form>
  //   </div>
  // </nav>
