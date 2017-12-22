function coinsReducer(state = {coins: ["BTC", "ETH", "idk", "something", "test", "hello"], currentCoin: "Empty"}, action){
  switch (action.type){
    case "FETCHED_COINS":
      return [state.coins, ...action.payload];
    case "VIEW_COIN":
      return Object.assign({}, state, {currentCoin: action.payload})
    default:
      return state;
  }
};

export default coinsReducer
