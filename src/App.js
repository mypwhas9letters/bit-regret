import React, { Component } from 'react';

import Home from './components/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import CoinPage from './components/coinpage';


class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Home />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
