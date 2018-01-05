import moment from 'moment';

export function viewCoin(coin){
  return{
    type: "VIEW_COIN",
    payload: coin
  }
}

export function fetchTopTwenty(){
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

export function fetchTopNext80(){
  return function(dispatch){
    fetch("https://api.coinmarketcap.com/v1/ticker/?start=21&limit=80")
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: "FETCHED_COINS",
        payload: json})
    })
  }
}

export function fetchHistoricalDetail(input){
  let date = (moment.unix(input.date)._i)/1000000;
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
