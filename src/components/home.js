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
    this.setState({coinName: event.target.value });
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
    this.setState({coin: this.props.coins.find(x=>x.symbol === this.state.coinName)})
  }

  render(){
    const list = !this.props.coins ? null : this.props.coins.map(function(coin){
      return <option key={coin.name} value={coin.symbol} price={coin.price_usd}>{coin.name}</option>
    })
    return(
      <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <h1>Pick a coin</h1>

        <form onSubmit={this.onFormSubmit}>
          <div className="form-row">

            <div className="form-group col-md-4">
              <label>Coin Name </label>
              <select name="coinName" onChange={this.onInputChange}>
                { list }
              </select>
            </div>

            <div className="form-group col-md-4">
              <label>Date </label>
              <div className="inlinediv">
                <DatePicker selected={this.state.date} onChange={this.dateChange} />
              </div>
            </div>

            <div className="form-group col-md-4">
              <label>Amount </label>
              <input onChange={this.onAmountChange} placeholder='Amount of Money' value={this.state.amount} name='amount' />
              </div>

            </div>

          <button type='submit' className="btn btn-primary">submit</button>
        </form>

        <h1>Old Price {this.props.historicalPrice === null ? null : Object.values(this.props.historicalPrice)[0].USD}</h1>
        <h2>Current Price{this.state.coin.price_usd}</h2>
        {this.props.historicalPrice === null ? null : <h2>Today it would be worth {(this.state.amount / Object.values(this.props.historicalPrice)[0].USD)* this.state.coin.price_usd}</h2>}
      </main>
    );
  }



        // <input type="text" className="form-control" id="inputCity">
        //
        // <select id="inputState" className="form-control">
        //   <option selected>Choose...</option>
        //   <option>...</option>
        // </select>
        //
        //
        //
        //
        // <input type="text" className="form-control" id="inputZip">




}

function mapStateToProps({ coins }){
  return { historicalPrice: coins.historicalPrice, coins:coins.coins }
}

export default connect(mapStateToProps, { fetchHistoricalDetail })(Home)
