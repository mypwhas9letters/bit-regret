import React from 'react';

const ChartData = (coin) => {
  const redOrGreen = coin.percent_change_24h >= 0 ? {color: 'green'} : {color: 'red'}
  return (
    <tr key={coin.name}>
      <td>{coin.rank}</td>
      <td>{coin.name}</td>
      <td>{coin.price_usd}</td>
      <td style={redOrGreen}>{coin.percent_change_24h}</td>
      <td>{coin.market_cap_usd}</td>
    </tr>
  )
}

export default ChartData
