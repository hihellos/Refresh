import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Home from './pages/Home';
// import Value from './pages/Value';
import Survey from './pages/Survey'
import { AppContext } from './utils/AppContext';
import API from './utils/API';
// import GuardedRoute from './utils/GuardedRoute';
import { UserContext } from './utils/UserContext';


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  // const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  },[])

  function onLoad() {
    API.getJwt()
    .then(res => {
      if (res.data === "Token Exist") {
        // console.log(res);
        userHasAuthenticated(true);
      } else {
        userHasAuthenticated(false);
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
    <UserContext.Provider value={{ userId, setUserId }}>
    <Router>
      <Switch>
        <Route exact path={["/","/login"]} component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/survey" component={Survey} />
        {/* <Route exact path="/value" component={Value} /> */}
        {/* <GuardedRoute path='/home' component={Home} auth={isAuthenticated} /> */}
        {/* <GuardedRoute path="/survey" component={Survey} auth={isAuthenticated} /> */}
      </Switch>
    </Router>
    </UserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
