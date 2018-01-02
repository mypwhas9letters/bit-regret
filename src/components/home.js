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
      <main role="main" className="col-sm-8 ml-sm-auto col-md-9 pt-3">
        <h1>Pick a coin</h1>

        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">

              <label>Coin Name </label>
              <select className="form-control" name="coinName" onChange={this.onInputChange}>
                { list }
              </select>
            </div>

            <div className="form-group">
            <label>Amount </label>
            <input className="form-control" onChange={this.onAmountChange} placeholder='Amount of Money' value={this.state.amount} name='amount' />

            </div>

              <div className="form-group">
              <label>Date </label>
              <div className="">
                <DatePicker selected={this.state.date} onChange={this.dateChange} />
              </div>
            </div>



          <button type='submit' className="btn btn-primary">submit</button>
        </form>

        {this.props.historicalPrice === null ? null :
          <div>
          <h2>Old Price {Object.values(this.props.historicalPrice)[0].USD}</h2>
          <h2>Current Price{this.state.coin.price_usd}</h2>
          <h2>Today it would be worth {(this.state.amount / Object.values(this.props.historicalPrice)[0].USD)* this.state.coin.price_usd}</h2>
          </div>
        }

      </main>
    );
  }

}

function mapStateToProps({ coinReducer }){
  return { historicalPrice: coinReducer.historicalPrice, coins:coinReducer.coins }
}

export default connect(mapStateToProps, { fetchHistoricalDetail })(Home)
