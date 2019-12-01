import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles, Card, CardContent, Grid, Typography, CircularProgress, Button } from "@material-ui/core"; 
import { textAlign } from '@material-ui/system';

const styles = theme => ({
    w100: {
        width: "100%"
    },
    noStyling: {
      textDecoration: "none"
    },
    mp0: {
        margin: 0,
        padding: 0
    },
    headerClr: {
        color: "#95a5a6"
    }
});

const TeamCard = (props) => {
    const { classes, teams } = props;

    let teamsMarkup = (
        <Grid item>
            <Typography variant="h5">N/A</Typography>
        </Grid>
    );

    if (teams) {
        if (teams.isLoading === true) {
            teamsMarkup = <CircularProgress />;
        } else if (teams.assignedTeams.length > 0) {
            teamsMarkup = (
                <Typography variant="h5" className={classes.mp0}>{teams.assignedTeams[0].name}</Typography>
            );
        }
    }

    return (
        <Card>
            <CardContent>
                <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography variant="h6" className={`${classes.headerClr} ${classes.mp0}`}>Team:</Typography> 
                    </Grid>
                    <Grid item>
                        {teamsMarkup}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

TeamCard.propTypes = {
    teams: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TeamCard);