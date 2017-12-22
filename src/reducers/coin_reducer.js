function coinsReducer(state = {coins: ["BTC", "ETH", "idk", "something"], currentCoin: {}}, action){
  switch (action.type){
    case "FETCHED_COINS":
      console.log([state.coins, ...action.payload])
      return [state.coins, ...action.payload];
    default:
      return state;
  }
};

export default coinsReducer
