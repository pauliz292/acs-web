import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom";
import './App.css';

import auth from './_services/authService';
import MainLayout from "./components/home/mainLayout";
import Home from './components/home/home';
import ProtectedRoute from './components/_common/protectedRoute';

function App() {

  let [ user, setUser ] = useState();

  useEffect(() => {
    setUser(auth.getCurrentUser())
  }, [])

  return (
    <Router className="App">
      <div>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={props => <Home {...props} user={user} />}
          >
          </Route>
          <ProtectedRoute path="/main" component={MainLayout}>
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
