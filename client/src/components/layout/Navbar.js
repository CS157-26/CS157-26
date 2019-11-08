import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  btnClr: {
    color: "#ecf0f1"
  },
  roboto: {
<<<<<<< HEAD
    fontFamily: "Roboto Condensed, sans-serif"
=======
    fontFamily: "roboto, sans-serif"
>>>>>>> Finished Navbar and Footer
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
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
