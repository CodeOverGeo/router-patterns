import React from 'react';
import { Link } from 'react-router-dom';

function Color({ hex, color }) {
  return (
    <div style={{ backgroundColor: hex }}>
      <p>This is {color}</p>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
}

export default Color;
