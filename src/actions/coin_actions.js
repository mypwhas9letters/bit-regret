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
      dispatch({type: "FETCHED_COINS", payload: json})
    })
  }
}

export function fetchHistoricalDetail(input){
  return function(dispatch){
    fetch("https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=1514102153")
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
  }
}
