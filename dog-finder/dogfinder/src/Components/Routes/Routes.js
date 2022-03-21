import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from '../DogList/Doglist';
import DogDetails from '../DogDetails/Dogdetails';

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <DogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
