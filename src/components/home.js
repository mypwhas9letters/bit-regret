import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Newform from './form'

import { fetchHistoricalDetail } from '../actions/coin_actions';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: null,
      coinName: 'BTC',
      amount: '',
      price: 0
    };
  }

  onInputChange = (event) => {
    console.log(event.target)
    let x = this
    debugger
    this.setState({coinName: event.target.value, price: this.props.coins.find(coin => coin.id === event.target.symbol)});
    console.log(this.state)
  }


  dateChange = (date) => {
    this.setState({ date });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchHistoricalDetail(this.state);
  }

  render(){
    console.log(this.props)
    const list = !this.props.coins ? null : this.props.coins.map(function(coin){
      return <option key={coin.name} value={coin.sybmol} price={coin.price_usd}>{coin.name}</option>
    })
    return(
      <main role="main" className="col-sm-9 ml-sm-auto col-md-9 pt-3">
        <h1>Pick a coin</h1>
        <form onSubmit={this.onFormSubmit}>
          <select name="coinName" onChange={this.onInputChange}>
            { list }
          </select>
          <DatePicker selected={this.state.date} onChange={this.dateChange} />
          <input onChange={this.onInputChange} placeholder='Amount of Money' value={this.state.amount} name='amount' />
          <button type='submit' className="btn btn-primary">submit</button>
        </form>
        <h1>{this.props.historicalPrice === null ? null : Object.values(this.props.historicalPrice)[0].USD}</h1>
        <Newform />
      </main>
    );
  }

}

function mapStateToProps({ historicalPrice, coins }){
  return { historicalPrice, coins }
}

export default connect(mapStateToProps, { fetchHistoricalDetail })(Home)
