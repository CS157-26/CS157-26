import React, { Component } from "react";

import { withStyles, Grid, Typography, Card, CardContent } from "@material-ui/core";

import PeopleIcon from '@material-ui/icons/People';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import axios from "axios";

const styles = theme => ({
  placeHolderGreeter: {
    fontSize: "108px",
    fontFamily: "Roboto Condensed, sans-serif",
    margin: 0,
    padding: 0
  },
  w100: {
    margin: 0,
    padding: 0,
    width: "100%",
    boxSizing: "border-box"
  },
  spacer: {
    [theme.breakpoints.up("sm")]: {
      marginBottom: "9em"
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: "2em"
    }
  }
});

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: ""
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" justify="center" alignItems="center" spacing={10} className={classes.w100} >
        <Grid item className={classes.spacer}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
              <p className={classes.placeHolderGreeter}>
                &lt;PIM/&gt;
              </p>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Production Incident Management Application</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.w100}>
          <hr className={classes.w100}/>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                  <Grid item>
                      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item>
                          <ConfirmationNumberIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="h5">Incident Management</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">Create, Update, and Assign incident tickets based on priority to efficiently handle all disruptions in your business.</Typography>
                    </Grid>
                    
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                  <Grid item>
                      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item>
                          <PeopleIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="h5">Team Oriented</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">Allows various software development and tech support teams to coordinate better and resolve issues in your business.</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item>
                          <EmojiPeopleIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="h5">User-friendly UI</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">Our application is user-friendly and intuitive to help lessen the overheard let you resolve production incidents with ease.</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Landing);
