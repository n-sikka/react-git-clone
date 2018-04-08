import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

const App = () => (
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <i className="fas fa-user"></i></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about-us">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="app-container xs p-3">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
