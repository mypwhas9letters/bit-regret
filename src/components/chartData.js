import React from 'react';

const ChartData = (coin) => {
  const redOrGreen = coin.percent_change_24h >= 0 ? {color: 'green'} : {color: 'red'}
  return (
    <tr key={coin.name} className="grayText">
      <td>{coin.rank}</td>
      <td>{coin.name}</td>
      <td>${coin.quotes.USD.price}</td>
      <td style={redOrGreen}>{coin.quotes.USD.percent_change_24h}%</td>
      <td>${Number(coin.quotes.USD.market_cap).toLocaleString()}</td>
    </tr>
  );
}

export default ChartData;
