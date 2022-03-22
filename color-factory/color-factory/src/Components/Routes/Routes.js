import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import colorCat from '../../Common/Colors';
import Color from '../Color/Color';
import NewColorForm from '../NewColorForm/NewColorForm';
import ColorList from '../ColorList/ColorList';

const Routes = () => {
  const loadedColors = JSON.parse(localStorage.getItem('colors')) || colorCat;

  const [colors, setColors] = useState(loadedColors);

  useEffect(
    () => localStorage.setItem('colors', JSON.stringify(colors)),
    [colors]
  );

  function handleAdd(newColorObj) {
    setColors((prevColors) => ({ ...prevColors, ...newColorObj }));
  }

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/colors'}>
          <ColorList colors={colors} />
        </Route>
        <Route exact path={'/colors/new'}>
          <NewColorForm addColor={handleAdd} />
        </Route>
        <Route path="/colors/:color" render={renderCurrentColor}></Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
