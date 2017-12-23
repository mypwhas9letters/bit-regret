import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCoinDetail } from '../actions/coin_actions'

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
    this.props.fetchCoinDetail(this.state)
    //https://min-api.cryptocompare.com/data/pricehistorical?fsym="BTC"&tsyms="USD"&ts="17121980400"
    //send a post request to the api
    //require unix timestamp
  }

  render(){
    return(
      <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <h1>Pick a coin</h1>
        <form onSubmit={this.onFormSubmit}>
          <input onChange={this.onInputChange} placeholder='Coin Name' value={this.state.coinName} name='coinName'/>
          <input onChange={this.onInputChange} placeholder='Date' value={this.state.date} name='date'/>
          <input onChange={this.onInputChange} placeholder='Amount of Money' value={this.state.amount} name='amount' />
          <button type='submit' className="btn btn-primary">submit</button>
        </form>
      </main>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCoinDetail }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
