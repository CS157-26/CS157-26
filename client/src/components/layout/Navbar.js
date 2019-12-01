import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/loginActions";

import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  btnClr: {
    color: "#ecf0f1"
  },
  roboto: {
    fontFamily: "Roboto Condensed, sans-serif"
  },
  noStyling: {
    textDecoration: "none"
  },
  abezee: {
    fontFamily: "ABeeZee, roboto, sans-serif"
  }
});

class Navbar extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    let loggedInMarkup;
    if (this.props.auth && this.props.auth.isAuthenticated) {
      loggedInMarkup = (
        <>
          <Grid item>
            <Link to="/teamcreation" className={classes.noStyling}>
              <Button className={classes.btnClr}>
                Teams
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/analytics" className={classes.noStyling}>
              <Button className={classes.btnClr}>
                Analytics
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/dashboard" className={classes.noStyling}>
              <Button className={classes.btnClr}>
                Dashboard
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/login" className={classes.noStyling}>
              <Button className={classes.btnClr} onClick={() => {
                this.props.logoutUser();
              }}>
                Sign Out
              </Button>
            </Link>
          </Grid>
        </>
      )
    } else {
      loggedInMarkup = (
        <>
          <Grid item>
            <Link to="/registration" className={classes.noStyling}>
              <Button className={classes.btnClr}>
                Sign up
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/login" className={classes.noStyling}>
              <Button className={classes.btnClr}>
                Sign in
              </Button>
            </Link>
          </Grid>
        </>
      );
    }

    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Link to="/" className={classes.noStyling}>
                <Button>
                  <Typography variant="h5" className={`${classes.btnClr} ${classes.roboto}`}>
                  &lt;Pim/&gt;
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={2}>
                {loggedInMarkup}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(withStyles(styles)(Navbar));
