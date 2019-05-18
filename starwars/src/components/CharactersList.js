import React, { Component } from 'react';
import EachChar from './EachChar';

class CharactersList extends Component {
  render() {
    return this.props.starwarsChars.map(char => (
      <EachChar key={char.name} char={char} />
    ));
  }
}

export default CharactersList;
