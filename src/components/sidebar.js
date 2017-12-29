import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { NavLink } from 'react-router-dom'

import { fetchTopTen, viewCoin } from '../actions/coin_actions'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {}

    this.props.fetchTopTen()
  }

  render(){
    console.log(this.props)
    const coinList = !this.props.coins ? null : this.props.coins.map(coin => <NavLink to="/coin" className="nav-item text-white" onClick={() => this.props.viewCoin(coin)} key={coin.name}>{coin.name}</NavLink>)
    return(
      <nav className="className=col-sm-3 col-md-2 d-none d-sm-block bg-dark sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item text-white"><h3>Top 20 coins</h3></li>
          { coinList }
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ coins }){
  return{ coins };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ viewCoin, fetchTopTen }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
