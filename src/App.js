import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom";
import './App.css';

import MainLayout from "./components/home/mainLayout";
import Login from './components/login/login';

function App() {
  return (
    <Router className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <Route path="/main" component={MainLayout}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
