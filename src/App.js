import React from 'react';
import Nav from './Nav';
import Upload from './Upload';
import Home from './Home';
import Search from './Search';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
        <Switch>
            <Route path="/upload" exact component={Upload}/>
        </Switch>
        <Switch>
            <Route path="/search" exact component={Search}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
