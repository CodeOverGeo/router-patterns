import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
  const ColorLinks = Object.keys(colors).map((colorName) => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Welcome to the Color Factory</h1>
      <div>
        <h2>
          <Link to="/colors/new">Add a color</Link>
        </h2>
      </div>
      <div>
        <p>Please select a color.</p>
        <ul>{ColorLinks}</ul>
      </div>
    </div>
  );
};

export default ColorList;
