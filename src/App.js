import React, { Component } from 'react';

import Home from './components/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';


class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <div className="row">
          <Sidebar />
          <Home />
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
