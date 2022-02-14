import React from 'react';
//import logo from './logo.svg';
import './App.css';

import './css/style.css'
import './lib/bootstrap/css/bootstrap.min.css';
import './lib/font-awesome/css/font-awesome.min.css'
import './lib/animate/animate.min.css'
import './lib/ionicons/css/ionicons.min.css'
import './lib/owlcarousel/assets/owl.carousel.min.css'
import './lib/lightbox/css/lightbox.min.css'
import logo from './img/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
