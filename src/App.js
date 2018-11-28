import React from 'react';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function Routes() {
  return (
    <div style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  )
}
export default Routes;
