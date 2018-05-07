import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { fetchHistoricalDetail, clearHistoricalDetail } from '../actions/coin_actions';
import Options from './amountOptions';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: null,
      coinName: 'BTC',
      amount: "",
      usd: true,
      coin: "",
      itemName: ""
    };
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  }

  onAmountTypeChange = (event) => {
    this.setState({usd: !this.state.usd, amount: ""});
  }

  dateChange = (date) => {
    this.setState({ date });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchHistoricalDetail(this.state);
    this.setState({coin: this.props.coins.find(x=>x.symbol === this.state.coinName), date: null});
  }
  componentWillUnmount(){
    this.props.clearHistoricalDetail();
  }

  render(){
    const list = !this.props.coins ? null : this.props.coins.map(coin => <option key={coin.name} value={coin.symbol} price={coin.price_usd}>{coin.name}</option>)
    return(
      <div className="col-md-9 pt-3">
        <h1 className="grayText">How Much You Could've Earned?</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label>CryptoCurrency Name </label>
            <select className="form-control" name="coinName" onChange={this.onInputChange} required>
              { list }
            </select>
          </div>

          <div className="form-group">
            <label>Date </label>
              <DatePicker selected={this.state.date} onChange={this.dateChange} required/>
          </div>

          <div className="form-group">
            Type: <button type="button" className="btn btn-outline-primary blueMargin btn-sm" onClick={this.onAmountTypeChange}>{this.state.usd ? "Amount (USD)" : "Other Things"}</button>
            {this.state.usd ?
            <div>
              <input className="form-control" onChange={this.onInputChange} placeholder='Amount of Money' value={this.state.amount} name='amount' type="text" required />
            </div>
            :
            < Options onChange={this.onInputChange}/>
            }
          </div>



          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
        <br />
        {this.props.historicalPrice === null ? null :
          Object.values(this.props.historicalPrice)[0].USD === 0 ? <h1 className="grayText">This coin did not exist</h1> :
          <div>
          <ul className="list-group">
            <li className="list-group-item grayBG"><h3>Old Price: ${Object.values(this.props.historicalPrice)[0].USD}</h3></li>
            <li className="list-group-item grayBG"><h3>Current Price: ${this.state.coin.quotes.USD.price}</h3></li>
            <li className="list-group-item grayBG grayText"><h3>Today, ${this.state.amount} Would Be Worth: ${(this.state.amount / Object.values(this.props.historicalPrice)[0].USD)* this.state.coin.quotes.USD.price}</h3></li>
          </ul>
        </div>
        }
      </div>
    );
  }
}

function mapStateToProps({coins, historicalPrice}){
  return { coins, historicalPrice }
}

export default connect(mapStateToProps, { fetchHistoricalDetail, clearHistoricalDetail })(Home);
