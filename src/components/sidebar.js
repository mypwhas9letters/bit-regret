import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { NavLink } from 'react-router-dom'

import { fetchTopTen, viewCoin } from '../actions/coin_actions'
import SideBarData from './sideBarData'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.props.fetchTopTen()
  }

  render(){
    const coinList = this.props.coins === null ? null : this.props.coins.map(coin => SideBarData(coin))
    return(
      <nav className="col-sm-3 col-md-2 d-none d-sm-block sidebar">
        <ul className="nav nav-pills flex-column">
          { coinList }
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ coinReducer }){
  return{ coins: coinReducer.coins };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ viewCoin, fetchTopTen }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
