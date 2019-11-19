import React, { Component } from "react";

import { AppBar, Toolbar, Grid, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import GitHubIcon from '@material-ui/icons/GitHub';

const styles = theme => ({
  btnClr: {
    color: "#ecf0f1"
  },
  roboto: {
    fontFamily: "roboto, sans-serif"
  }
})

class Footer extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                  <IconButton className={classes.btnClr} href="https://github.com/CS157-26/CS157-26"><GitHubIcon /></IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" className={classes.roboto}>
                Created by Team 26
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
