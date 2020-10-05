import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import EventTaks from './components/EventTaks/EventTaks';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AdminAddEvent from './components/AdminAddEvent/AdminAddEvent';

export const UserContext = createContext()

const App = () => {
  const [volunteerInfo, setVolunteerInfo] = useState([]);

  useEffect(() => {
    fetch('https://peaceful-beach-73677.herokuapp.com/volunteerInfo')
      .then(res => res.json())
      .then(data => setVolunteerInfo(data))
  }, [])

  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',

  })


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser], [volunteerInfo, setVolunteerInfo]} >
      <Router>

        <Switch>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/home">
            <Header />
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>

          <PrivateRoute path="/volunteer/:title">
            <Register />
          </PrivateRoute>

          <PrivateRoute path='/events'>
            <Header />
            <EventTaks />
          </PrivateRoute>

          <Route path='/admin'>
            <AdminPanel />
          </Route>

          <Route path='/adminAddEvent'>
            <AdminAddEvent />
          </Route>

          <Route path='*'>
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
