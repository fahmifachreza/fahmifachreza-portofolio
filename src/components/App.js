import React, { Component } from 'react';
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

const history = createBrowserHistory();

// export default function App() {
//   console.log('p:', this.props);
//   return (
//     <Router history={history}>
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/work" component={Home} />
//           <Route exact path="/frs" component={Frs} />
//           <Route exact path="/topchat" component={Topchat} />
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

class App extends Component {
  render() {
    console.log('p:', this.props);

    return (
      <Router history={history}>
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
      </Router>
    );
  }
}

export default App;
