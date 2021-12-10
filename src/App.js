import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Checkout from "./Checkout";
import Header from './Header';
import Home from "./Home";
import Login from "./Login";
import React from 'react';

function App() {
  return (
    //BEM
    <Router>
     <div className="app"> 
     

      <Switch>
      <Route path="/login">
       <Login />
      </Route>
           
       <Route path="/checkout">
       <Header />
        <Checkout />
      </Route>
      
      <Route path="/">
      <Header />
       <Home />
     </Route>
     
     </Switch>
     
     </div>
    </Router>
  );
};

export default App;
