import React, { Component } from 'react';
import Titles from './Components/title';
import Form from './Components/form';
import Weather from './Components/weather';

class App extends Component {
  render() {
    return (
      <div>
      <Titles />
      <Form />
      <Weather />
      </div>
    );
  }
}

export default App;
