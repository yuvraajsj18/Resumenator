import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Signup from './components/Signup'
import Setup from './components/Setup'
import Signin from './components/Signin'

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <PrivateRoute path="/setup">
          <Setup />
        </PrivateRoute>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
