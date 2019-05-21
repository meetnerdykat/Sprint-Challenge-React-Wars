import React, { Component } from 'react';
import './App.css';
import CharactersList from './components/CharactersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App container">
        <div className="col-sm-12 col-md-6 offset-md-3">
          <h1 className="d-sm-text-center Header">React Wars</h1>

          <CharactersList starwarsChars={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
