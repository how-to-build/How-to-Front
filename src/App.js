import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home className="h-100" />} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/about" render={() => <AboutPage className="h-100" />} />
        <Route path="/contact" render={() => <ContactPage />} />
        <Route path="/profile" render={() => <ProfilePage />} />
      </Switch>
    );
  }
}

export default App; //passes down router path for redirect
