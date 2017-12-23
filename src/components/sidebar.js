import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { fetchTopTen, viewCoin } from '../actions/coin_actions'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {}

    this.props.fetchTopTen()
  }

  render(){
    const coinList = this.props.coins === null ? null : this.props.coins.map(coin => <li className="nav-item text-white" onClick={() => this.props.viewCoin(coin)} key={coin.name}>{coin.name}</li>)
    return(
      <nav className="className=col-sm-3 col-md-2 d-none d-sm-block bg-dark sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item text-white">Top 10 coins</li>
          { coinList }
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
  return bindActionCreators({ viewCoin, fetchTopTen }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
