import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: '',
      coinName: '',
      amount: ''
    };
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    //https://min-api.cryptocompare.com/data/pricehistorical?fsym="BTC"&tsyms="USD"&ts="17121980400"
    //send a post request to the api
    //require unix timestamp
  }

  render(){
    return(
      <div className='container'>
        <h1>How much money you could have made</h1>
        <form onSubmit={this.onFormSubmit}>
          <input onChange={this.onInputChange} placeholder='Coin Name' value={this.state.coinName} name='coinName'/>
          <input onChange={this.onInputChange} placeholder='Date' value={this.state.date} name='date'/>
          <input onChange={this.onInputChange} placeholder='Amount of Money' value={this.state.amount} name='amount' />
          <button type='submit' className="btn btn-primary">submit</button>
        </form>
      </div>
    );
  }

}

export default Home
