import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; // npm install react-router-dom

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Post from './components/Post';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/user/57">User</Link></li>
              <li><Link to="/post/1234">Post</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route exact path="/user/"><Contact /></Route>
            <Route path="/user/:userid"><User /></Route>
            <Route path="/post/:postid" component={Post} />
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
