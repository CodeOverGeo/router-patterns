import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();

  const chosenDog = dogs.find(
    (dog) => dog.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div>
      <img src={chosenDog.src} alt={chosenDog.name} />
      <h2>{chosenDog.name}</h2>
      <h3>{chosenDog.age} years old</h3>
      <ul>
        {chosenDog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
};

export default DogDetails;
