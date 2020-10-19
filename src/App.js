import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Basket from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Orders from './components/Orders'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51HcwAVFOeMeOKOOTaNZh5PwufFr6E5I3S0oc517fJThiLdDTH8PZ2R0oE586HRzzoqgXRmWo37omI6jtR96lQYvB00R6D0hFLA");

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER >>> ', authUser);

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payments">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
