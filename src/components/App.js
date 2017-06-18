import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, IndexLink, Link, browserHistory, Router } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
