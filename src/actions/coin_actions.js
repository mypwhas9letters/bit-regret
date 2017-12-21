// https://api.coinmarketcap.com/v1/ticker/?limit=10

export default function fetchCrypto(){
  fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10",{
    method: 'get'
  })
  .then((res) => res.json())
  .then((json) => {
    console.log(json)
  })
}
