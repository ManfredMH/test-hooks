import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { SessionStore } from './context/store/SessionStore';

import Home from './components/pages/Home';
// import AnotherPage from './components/pages/UserInfo';
import SignInPage from './components/pages/SignInPage';
import { Header } from './components/partials/Header';
import UserInfo from './components/pages/UserInfo';

function App() {
  return (
    <SessionStore>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route path="/user-info" component={UserInfo} />
        </Switch>
      </Router>
    </SessionStore>
  );
}

export default App;
