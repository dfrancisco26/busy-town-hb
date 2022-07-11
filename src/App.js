import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Admin from './Admin';
import BusyCity from './BusyCity';

function App() {
  const [lightColor, setLightColor] = useState('red');
  const [lizardSize, setLizardSize] = useState(10);
  const [alienSize, setAlienSize] = useState(10);
  const [traffic, setTraffic] = useState(['car', 'truck']);

  // track the following state with a few useState hooks:
  // lightColor should be a string that starts out as 'red'
  // lizardSize should be a number that starts out as 10
  // alienSize should be a number that starts out as 10
  // traffic is complicated. It should be an array of strings that starts out as ['car', 'truck']

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path ="/">
            <BusyCity
              lightColor = {lightColor}
              setLightColor = {setLightColor}
              lizardSize = {lizardSize}
              setLizardSize = {setLizardSize}
              alienSize = {alienSize}
              setAlienSize = {setAlienSize}
              traffic = {traffic}
              setTraffic = {setTraffic} />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
        

      </div>
    </Router>
  );
}

export default App;

