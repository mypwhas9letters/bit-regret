import moment from 'moment';

export function viewCoin(coin){
  return{
    type: "VIEW_COIN",
    payload: coin
  }
}

export function fetchTopTen(){
  return function(dispatch){
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20")
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: "FETCHED_COINS",
        payload: json})
    })
  }
}

export function fetchHistoricalDetail(input){
  debugger
  let date = (moment.unix(input.date)._i)/1000000;
  let coinName = input.coinName.sybmol
  return function(dispatch){
    fetch(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${input.coinName}&tsyms=USD&ts=${date}`)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: "HISTORICAL_DATA",
        payload: json})
    })
  }
}
