import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Destination from './components/Destination';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/destination" component={Destination} />
            <Route path="/about" component={AboutUs} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
