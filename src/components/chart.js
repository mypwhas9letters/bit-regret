import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartData from './chartData';
import { fetchTopNext80 } from '../actions/coin_actions';


class Chart extends Component {
  constructor(props){
    super(props)

    this.state = {
      coins: ""
    }
  }

  // componentDidMount(){
  //   this.props.fetchTopNext80()
  // }

  render(){
    console.log(this.props)
    const tableRows = this.props.coins.map(coin => ChartData(coin))
    return(
      <main role="main" className="col-md-9 pt-3">
      <h2 className="grayText">CryptoCurrency Market</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price (USD)</th>
              <th>Change (24hr)</th>
              <th>Market Cap (USD)</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
        </div>
      </main >
    )
  }
}

function mapStateToProps({ coins }){
  return { coins }
}

export default connect(mapStateToProps, { fetchTopNext80 })(Chart)
