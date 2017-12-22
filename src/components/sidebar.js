import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { fetchCrypto, viewCoin } from '../actions/coin_actions'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {}

    fetchCrypto()
  }

  onClickCoin(coin){
    this.props.viewCoin(coin)
  }

  coinList(){
    return this.props.coins.map(coin => <li className="nav-item text-white" onClick={() => this.onClickCoin(coin)} key={coin}>{coin}</li>)
  }

  render(){
    return(
      <nav className="className=col-sm-3 col-md-2 d-none d-sm-block bg-dark sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">Top 10 coins</li>
          {this.coinList()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return{
    coins: state.coins
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({viewCoin: viewCoin}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
