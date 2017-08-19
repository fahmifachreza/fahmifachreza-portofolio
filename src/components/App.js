import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
// import MobileHeader from './MobileHeader';
import Home from './Home';
import Footer from './Footer';
import Frs from './Frs';
import Topchat from './Topchat';


export default function App() {
  return (
    <div>
      <Header />
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
