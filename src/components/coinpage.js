import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoinPage extends Component {
  render() {
    console.log(this.props.current)
    return (
      <main role="main" className="col-sm-9 ml-sm-auto col-md-9 pt-3">
        <h1>Current coin selected: {this.props.current.name}</h1>
        <h1>Current price: {this.props.current.price_usd}</h1>
      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    current: state.currentCoin
  }
}

export default connect(mapStateToProps)(CoinPage)
