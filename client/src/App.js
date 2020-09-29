import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Home from './pages/Home';
// import Value from './pages/Value';
import { AppContext } from './utils/AppContext';
import API from './utils/API';
import GuardedRoute from './utils/GuardedRoute';


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  // const [isAuthenticating, setIsAuthenticating] = useState(true);

  // useEffect(() => {
  //   onLoad();
  // },[])

  // function onLoad() {
  //   API.getJwt()
  //   .then(res => {
  //     console.log(res)
  //     userHasAuthenticated(true);
  //   })
  //   .catch(err => console.log(err));
  //   setIsAuthenticating(false);
  // }

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
    <Router>
      <Switch>
        <Route exact path={["/","/login"]} component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        {/*  <Route exact path="/value" component={Value} /> */}
        {/* <GuardedRoute path='/home' component={Home} auth={isAuthenticated} /> */}
      </Switch>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
