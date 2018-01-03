import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import SideBarData from './sideBarData';
import { fetchTopTwenty, viewCoin } from '../actions/coin_actions';

class Sidebar extends Component{

  componentDidMount(){
    this.props.fetchTopTwenty()
  }

  render(){
    const coinList = this.props.coins === null ? null : this.props.coins.map(coin => SideBarData(coin))
    return(
      <nav className="col-sm-3 col-md-2 d-none d-sm-block sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item"><h4 className="whiteText">Current Price</h4></li>
          { coinList }
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ coins }){
  return{ coins };
}

export default connect(mapStateToProps, { viewCoin, fetchTopTwenty })(Sidebar)
