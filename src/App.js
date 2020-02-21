import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateGroup from "./components/create-group.component";
import EditGroup from "./components/edit-group.component";
import GroupList from "./components/group-list.component";

import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">SFA Client Database</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Group List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Group</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={GroupList} />
          <Route path="/edit/:id" component={EditGroup} />
          <Route path="/create" component={CreateGroup} />
        </div>
      </Router>
        )
    }
}

export default App;
