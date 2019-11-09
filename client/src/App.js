import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import { withStyles, Grid } from "@material-ui/core";

import Landing from "./components/landing/Landing";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";


import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/loginActions";
import PrivateRoute from "./components/PrivateRoute";

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
  root: {
    flexGrow: 1
  },
  w100: {
    width: "100%"
  },
  m0: {
    margin: 0
  },
  border: {
    border: "2px solid red"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <Router className={classes.m0}>
          <Navbar />
          <Grid container direction="row">
            <Grid item xs={12}>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/login" component={Login} />
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
