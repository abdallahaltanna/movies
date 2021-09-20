import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/movies/:id'>
        <SingleMovie />
      </Route>
    </Switch>
  );
}

export default App;
