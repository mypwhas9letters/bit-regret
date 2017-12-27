import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchHistoricalDetail } from '../actions/coin_actions'
import DatePicker from 'react-datepicker';
import moment from 'moment';


import 'react-datepicker/dist/react-datepicker.css';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: null,
      coinName: 'BTC',
      amount: ''
    };
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  dateChange = (date) => {
    this.setState({ date });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    let input = {
      date: (moment.unix(this.state.date)._i)/1000000,
      coinName: this.state.coinName,
      amount: this.state.amount
    }
    this.props.fetchHistoricalDetail(input)
  }

  render(){
    const list = !this.props.coins ? null : this.props.coins.map(coin => <option key={coin.name} value={coin.symbol}>{coin.name}</option>)
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
      </main>
    );
  }

}

function mapStateToProps({ historicalPrice, coins }){
  return { historicalPrice, coins }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchHistoricalDetail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
