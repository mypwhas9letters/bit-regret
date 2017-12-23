export function viewCoin(coin){
  return{
    type: "VIEW_COIN",
    payload: coin
  }
}

export function fetchTopTen(){
  return function(dispatch){
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10")
    .then(res => res.json())
    .then(json => {
      dispatch({type: "FETCHED_COINS", payload: json})
    })
  }
}

export function fetchCoinDetail(input){
  console.log(input)
  return{
    type: "Test"
  }
}
//
//
// export function getParkingSpot(id){
//   return function(dispatch){
//     fetch(`https://parallelp-server.herokuapp.com/api/v1/parking_spots/${id}`)
//     .then(res => res.json())
//     .then(json => {
//         dispatch({type: "GET_PARKING_SPOT", payload: json})
//     })
//   }
// }
