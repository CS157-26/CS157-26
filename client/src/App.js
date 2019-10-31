import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import { withStyles, Grid } from "@material-ui/core";

import Landing from "./components/landing/Landing";
import Registration from "./components/registration/Registration";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
