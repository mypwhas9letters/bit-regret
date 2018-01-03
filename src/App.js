import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Chart from './components/chart';
import CoinPage from './components/coinpage';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
          <div className="row">
            <Sidebar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/coin" component={CoinPage}/>
            <Route exact path="/chart" component={Chart}/>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
