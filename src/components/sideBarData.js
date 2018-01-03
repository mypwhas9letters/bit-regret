import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarData = (coin) => {
  return (
    <li className="nav-item" key={coin.name}>
      {coin.name} - ${coin.price_usd}
    </li>
  )
}

export default SideBarData
