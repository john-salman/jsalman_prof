import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './App.css';

import SideBar from './Pieces/SideBar';

class App extends Component {

  render() {
    return (
          <div className="full-wrap">
            <SideBar/>
          </div>
    );
  }
}

export default App;
