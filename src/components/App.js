import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './Header';
// import MobileHeader from './MobileHeader';
import Home from './Home';
import Footer from './Footer';
import Frs from './Frs';
import Topchat from './Topchat';
import ItemReplacement from './ItemReplacement';

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Home} />
          <Route exact path="/frs" component={Frs} />
          <Route exact path="/topchat" component={Topchat} />
          <Route exact path="/itemreplacement" component={ItemReplacement} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
