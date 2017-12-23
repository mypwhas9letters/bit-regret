import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoinPage extends Component {
  render() {
    return (
      <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <h1>Current coin selected: {this.props.current.name}</h1>
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
