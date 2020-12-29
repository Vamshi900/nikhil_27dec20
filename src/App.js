import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Containers/Home';
import UserForm from './Containers/NewUserForm';
import EditUserForm from './Containers/EditUserForm';

export default function App() {
  return (
    <div className="App" id='app'>
      <Router>
        <div>
          <Switch>
            <Route path="/newuser">
              <UserForm />
            </Route>
            <Route path="/edituser/:userId" component={EditUserForm}> 
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}


function About() {
  return <h2>About</h2>;
}