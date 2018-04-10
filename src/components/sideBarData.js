import React from 'react';

const SideBarData = (coin) => {
  return (
    <li className="nav-item" key={coin.name}>
      {coin.name} - ${coin.price_usd}
    </li>
  );
}

export default SideBarData;
