import React, { Component } from 'react';
import './style.scss';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import GitSearchCard from './Components/GitSearchCard/GitSearchCard.js'
import { Provider } from "react-redux";
import Store from './Store.js'
import "../node_modules/font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header></Header>
          <div className="wrapper">
            <GitSearchCard></GitSearchCard>
          </div>
          <Footer></Footer>
        </div>
      </Provider>
    );
  }
}

export default App;
