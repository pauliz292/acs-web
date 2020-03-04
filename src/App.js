import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom";
import './App.css';

import Home from "./components/home/home";
import Login from './components/login/login';

function App() {
  return (
    <Router className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <Route path="/home" component={Home}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
