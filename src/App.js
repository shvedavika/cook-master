import React, { Component } from 'react';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas }  from '@fortawesome/free-solid-svg-icons';
import { far }  from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

class App extends Component {
  render() {
    return (
      <HomePage />
    );
  }
}

export default App;
