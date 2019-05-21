import React, { Component } from 'react';
import './StarWars.css';

class EachChar extends Component {
  render() {
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year
    } = this.props.char;
    return (
      <div className="card-body bg-dark text-white mb-3">
        <h4 className="card-title bg-dark text-light font-weight-bolder p-2">
          {name}
        </h4>
        <ul className="list-unstyled">
          <li>Height: {height} </li>
          <li>Mass: {mass}</li>
          <li>Hair Color: {hair_color} </li>
          <li>Skin Color: {skin_color} </li>
          <li>Eye Color: {eye_color} </li>
          <li>Birth Year: {birth_year} </li>
        </ul>
      </div>
    );
  }
}

export default EachChar;
