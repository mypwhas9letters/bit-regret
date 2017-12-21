import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: '',
      coinName: '',
      amount: ''
    }
  }

  render(){
    return(
      <form>
        <input placeholder="Coin Name"></input>
        <input placeholder="Date"></input>
        <input placeholder="Amount of Money"></input>
        <button type="submit">submit</button>
      </form>
    )
  }

}

export default Home
