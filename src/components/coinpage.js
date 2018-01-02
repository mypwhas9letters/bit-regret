import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoinPage extends Component {
  render() {
    console.log(this.props)

    return (
      <main role="main" className="col-sm-8 ml-sm-auto col-md-9 pt-3">
        <h1>Current coin selected: {this.props.current.name}</h1>
        <h1>Current price: {this.props.current.price_usd}</h1>
      </main>
    )
  }
}

function mapStateToProps({ coinReducer }){
  return{
    current: coinReducer
  }
}

export default connect(mapStateToProps)(CoinPage)
