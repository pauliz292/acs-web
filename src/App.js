import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import './App.css';

import Home from "./components/home/home";

function App() {
  return (
    <Provider store={store}>
      <Router className="App">
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
