import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, browserHistory, Router } from 'react-router-dom';
import { Link} from 'react-router';
import Header from './Header';
import MobileHeader from './MobileHeader';
import Home from './Home';
import Footer from './Footer';
import Frs from './Frs';
import Topchat from './Topchat';

export default function App() {
  return (
    <div>
      <Header />
      <MobileHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Home} />
        <Route exact path="/frs" component={Frs} />
        <Route exact path="/topchat" component={Topchat} />
      </Switch>
      <Footer />      
    </div>
  );
}
