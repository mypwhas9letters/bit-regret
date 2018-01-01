import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { fetchHistoricalDetail } from '../actions/coin_actions';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: null,
      coinName: 'BTC',
      amount: 0,
      price: 0,
      coin: ""
    };
  }

  onInputChange = (event) => {
    this.setState({coinName: event.target.value, price: this.props.coins.find(coin => coin.id === event.target.symbol)});
  }

  onAmountChange = (event) => {
    this.setState({amount: event.target.value})
  }

  dateChange = (date) => {
    this.setState({ date });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchHistoricalDetail(this.state);
    let x = this
    
    this.setState({coin: this.props.coins.find(x=>x.symbol === this.state.coinName)})
  }

  render(){
    console.log(this.state)
    const list = !this.props.coins ? null : this.props.coins.map(function(coin){
      return <option key={coin.name} value={coin.symbol} price={coin.price_usd}>{coin.name}</option>
    })
    return(
      <main role="main" className="col-sm-9 ml-sm-auto col-md-9 pt-3">
        <h1>Pick a coin</h1>
        <form onSubmit={this.onFormSubmit}>
          <select name="coinName" onChange={this.onInputChange}>
            { list }
          </select>
          <DatePicker selected={this.state.date} onChange={this.dateChange} />
          <input onChange={this.onAmountChange} placeholder='Amount of Money' value={this.state.amount} name='amount' />
          <button type='submit' className="btn btn-primary">submit</button>
        </form>
        <h1>Old Price {this.props.historicalPrice === null ? null : Object.values(this.props.historicalPrice)[0].USD}</h1>
        <h2>Current Price{this.state.coin.price_usd}</h2>
        {this.props.historicalPrice === null ? null : <h2>Today it would be worth {(this.state.amount / Object.values(this.props.historicalPrice)[0].USD)* this.state.coin.price_usd}</h2>}
      </main>
    );
  }

}

function mapStateToProps({ coins }){
  return { historicalPrice: coins.historicalPrice, coins:coins.coins }
}

export default connect(mapStateToProps, { fetchHistoricalDetail })(Home)
