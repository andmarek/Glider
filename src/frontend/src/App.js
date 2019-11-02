import React from 'react';
import Home from './scenes/Home/index.js';
import Navbar from './components/Navbar/index.js';
import {HashRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
