import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import Search from './components/Search'
import About from './components/About';
import Error from './components/Error';
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Search} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={Error} />
        
      </Switch>
    </Router>
  );
}

export default App;
