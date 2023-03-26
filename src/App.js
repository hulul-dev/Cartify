import React from 'react'
import Header from './Header'
import "./App.css";
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// NEED TO START FROM PART-3 1:38:11 -YT -- https://www.youtube.com/watch?v=RDV3Z1KCBvo
function App() {
  return (
    <Router>
    <div className='app bg-slate-100'>
      <Switch>
        <Route path="/">
          <Header/>
          <Home />
        </Route>
        <Route path="/checkout">
          <Header/>
          <h1>IM CHECKOUT PAGE</h1>
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App