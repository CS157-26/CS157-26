import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import { withStyles, Grid } from "@material-ui/core";

import PrivateRoute from "./components/PrivateRoute";
import Landing from "./components/landing/Landing";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
<<<<<<< HEAD
import LoginAttempts from "./components/login/LoginAttempts"
=======
import Dashboard from "./components/dashboard/Dashboard";
>>>>>>> Created files for Dashboard actions, reducers and component

import TeamCreation from "./components/teams/TeamCreation";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/loginActions";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

const styles = {
  minHeight: {
    minHeight: "95vh",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  minHeight: {
    minHeight: "95vh",
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  border: {
    border: "1px solid black"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Grid container direction="row" justify="center" alignItems="center" className={classes.minHeight}>
            <Grid item>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/loginattempts" component={LoginAttempts} />
                <PrivateRoute exact path="/teamcreation" component={TeamCreation} />>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Grid>
          </Grid>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);