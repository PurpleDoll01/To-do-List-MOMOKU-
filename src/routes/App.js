import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Details from '../containers/Details';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:task" component={Details} />
      </Switch>
  </BrowserRouter>
);

export default App;