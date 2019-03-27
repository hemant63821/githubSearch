import React, { Component } from 'react';
import './style.scss';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import LoanComponent from './Components/LoanComponent/LoanComponent.js'
import { Provider } from "react-redux";
import Store from './Store.js'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Header></Header>
          <div className="wrapper">
            <LoanComponent></LoanComponent>
          </div>
          <Footer></Footer>
        </div>
      </Provider>
    );
  }
}

export default App;
