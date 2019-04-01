import React, { Component } from 'react';
import Titles from './Components/title';
import Form from './Components/form';
import Weather from './Components/weather';

const API_KEY = "40211af4fe9d576a92ad2ce150d0fb39";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div>
      <Titles />
      <Form getWeather={this.getWeather}/>
      <Weather />
      </div>
    );
  }
}

export default App;
