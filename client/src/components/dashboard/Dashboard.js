import React, { Component } from 'react'



import { Grid, Card, CardContent, withStyles } from "@material-ui/core";

const styles = theme => ({
    w100: {
        width: "100%"
    },
    border: {
        border: "1px solid black"
    }
});

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid className={classes.w100} container direction="column" justify="flex-start" alignItems="center">
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        )
    }
}

Dashboard.propTypes = {};

export default withStyles(styles)(Dashboard);