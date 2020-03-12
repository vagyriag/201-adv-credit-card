import React from 'react';
import './App.css';
import CreditCard from './CreditCard/CreditCard';
import Will from './Will/Will';
import { HashRouter, Route, Link } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <Link className="link" to="/">Ir a La Home</Link>
        <Link className="link" to="/will">Ir a Will</Link>
        <Link className="link" to="/credit">Ir a CreditCard</Link>
      
        <Route path="/will" component={Will} />

        <Route path="/credit" component={CreditCard} />

        <Route path="/" exact render={() => {
          return <div>
            <h1>La Home</h1>
          </div>
        }} />

      </HashRouter>
    </div>
  );
}

export default App;
