import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import CoinPage from './components/coinpage';

class App extends Component {
  render() {
    return (
      <div className="bgcolor">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/coin" component={CoinPage}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
