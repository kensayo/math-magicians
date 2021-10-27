import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Footer from './components/Footer';
import './App.css';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
              <NavLink className="nav-link link-dark fw-bold fs-4" to="/">Math Magicians</NavLink>
              <div className="navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100 pe-5">
                  <li className="nav-item px-3">
                    <NavLink activeClassName="fw-bold active" className="nav-link" exact to="/">Home</NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <span className="nav-link">|</span>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink activeClassName="fw-bold active" className="nav-link" to="/calculator">Calculator</NavLink>
                  </li>
                  <li className="nav-item px-3">
                    <span className="nav-link">|</span>
                  </li>
                  <li className="nav-item px-3">
                    <NavLink activeClassName="fw-bold active" className="nav-link" to="/quote">Quote</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
