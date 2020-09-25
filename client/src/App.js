import React from 'react';
import {BrowserRouter as Route, Router} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import Value from './pages/Value';

function App() {
  return (
    <Router>
      <Route exact path={["/","/login"]} component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/value" component={Value} />
    </Router>
  );
}

export default App;
