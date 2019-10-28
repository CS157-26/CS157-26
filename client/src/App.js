import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    );
  }
}

export default withStyles(styles)(App);
