import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom";
import './App.css';

import Home from "./components/home/home";
import Login from './components/login/login';

import Header from './components/home/header';
import SideBar from './components/home/sidebar';
import Footer from './components/home/footer';

function App() {
  return (
    <Router className="App">
      <div>
        <Header />
        <SideBar />
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <Route path="/home" component={Home}>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
