import React from 'react';

const SideBarData = (coin) => {
  return (
    <li className="nav-item" key={coin.name}>
      {coin.name} - ${coin.quotes.USD.price}
    </li>
  );
}

export default SideBarData;
