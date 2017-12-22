import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoinPage extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Current coin selected: {this.props.current}</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    current: state.currentCoin
  }
}

export default connect(mapStateToProps)(CoinPage)
