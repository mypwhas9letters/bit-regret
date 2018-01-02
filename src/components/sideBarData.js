import React from 'react';
import { NavLink } from 'react-router-dom'


const SideBarData = (coin) => {
  return (
    <li className="nav-item" key={coin.name}>
      <NavLink to="/coin" className="nav-link" onClick={() => this.props.viewCoin(coin)}>{coin.name} {coin.price_usd}</NavLink>
    </li>
  )
}

export default SideBarData
