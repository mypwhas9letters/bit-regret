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
      coin: ""
    };
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  }

  dateChange = (date) => {
    this.setState({ date });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchHistoricalDetail(this.state);
    this.setState({coin: this.props.coins.find(x=>x.symbol === this.state.coinName), date: null})
  }

  render(){
    console.log(this.props)
    const list = !this.props.coins ? null : this.props.coins.map(coin => <option key={coin.name} value={coin.symbol} price={coin.price_usd}>{coin.name}</option>)
    return(
      <div className="col-sm-8 ml-sm-auto col-md-9 pt-3">
        <h1 className="whiteText">How Much You Could've Earned?</h1>

        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">

              <label>CryptoCurrency Name </label>
              <select className="form-control" name="coinName" onChange={this.onInputChange} required>
                { list }
              </select>
            </div>

            <div className="form-group">
            <label>Amount (USD)</label>
            <input className="form-control" onChange={this.onInputChange} placeholder='Amount of Money' value={this.state.amount} name='amount' type="number" required/>

            </div>

            <div className="form-group">
              <label>Date </label>
                <DatePicker selected={this.state.date} onChange={this.dateChange} required/>
            </div>



          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
      <br />
        {this.props.historicalPrice === null ? null :
          Object.values(this.props.historicalPrice)[0].USD === 0 ? <h1 className="whiteText">This coin did not exist</h1> :
          <ul className="list-group">
            <li className="list-group-item grayBG"><h2>Old Price: ${Object.values(this.props.historicalPrice)[0].USD}</h2></li>
            <li className="list-group-item grayBG"><h2>Current Price: ${this.state.coin.price_usd}</h2></li>
            <li className="list-group-item grayBG whiteText"><h2>Today {this.state.coin.name} Would Be Worth: ${(this.state.amount / Object.values(this.props.historicalPrice)[0].USD)* this.state.coin.price_usd}</h2></li>
          </ul>
        }

      </div>
    );
  }

}

function mapStateToProps({coins, historicalPrice}){
  return { coins, historicalPrice }
}

export default connect(mapStateToProps, { fetchHistoricalDetail })(Home)
