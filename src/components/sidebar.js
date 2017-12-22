import React, {Component} from 'react';
import { connect } from 'react-redux'

import { fetchCrypto } from '../actions/coin_actions'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {}

    fetchCrypto()
  }

  render(){
    //
      const coinList = this.props.coins.map((coin) =>(<li key={coin}><a href="">{coin}</a></li>) )
    //
    
    return(
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar ">
          <li className="active"><a href="">Top 10 coins <span className="sr-only">(current)</span></a></li>
          <ul>
            {coinList}
          </ul>
          <li><a href="">Reports</a></li>
          <li><a href="">Analytics</a></li>
          <li><a href="">Export</a></li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    coins: state.coins
  }
}


export default connect(mapStateToProps)(Sidebar)
