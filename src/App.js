import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Signup from './components/Signup'
import Setup from './components/Setup'
import Signin from './components/Signin'
import ResetPassword from './components/ResetPassword'
import Home from './components/Home'
import CreateResume from './components/CreateResume'
import { ResumeProvider } from './context/ResumeContext'
import { JobProvider } from './context/JobContext'
import ViewResume from './components/ViewResume'

function App() {

  return (
    <Router>
      <ResumeProvider>
        <Nav />
      </ResumeProvider>
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
        <Route path="/reset-password">
          <ResetPassword />
        </Route>

        <PrivateRoute path="/home">
          <ResumeProvider>
            <JobProvider>
                <Home />
            </JobProvider>
            </ResumeProvider>
        </PrivateRoute>        

        <PrivateRoute path="/create-resume">
          <ResumeProvider>
            <CreateResume />
          </ResumeProvider>
        </PrivateRoute>

        <PrivateRoute path="/edit-resume">
          <ResumeProvider>
            <CreateResume />
          </ResumeProvider>
        </PrivateRoute>

        <PrivateRoute path="/view-resume">
          <ResumeProvider>
            <ViewResume />
          </ResumeProvider>
        </PrivateRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
