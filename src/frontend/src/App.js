import React from 'react';
import Home from './scenes/Home/index.js';
import Navbar from './components/Navbar/index.js';
import {HashRouter, Switch, Route} from 'react-router-dom';
import EventThread from './scenes/EventThread';
import Postevent from './scenes/Postevent/index.js';

function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/PostEvent' component={Postevent} />
              <Route path='/Event/:id' component={EventThread} />
            </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
