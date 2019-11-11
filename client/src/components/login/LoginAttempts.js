import React, { Component } from "react";

import LoginAttemptCard from "./LoginAttemptCard";

import { withStyles, Grid } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = theme => ({
    pageSpacing: {
        paddingTop: "5em",
        paddingBottom: "5em"
    },
    cardSize: {
        [theme.breakpoints.up("sm")]: {
            width: "1000px"
        },
        [theme.breakpoints.only("xs")]: {
            width: "100%"
        }
    },
    border: {
        border: "2px solid red"
    }
});

// fake data until 010 is merged in
function createData(ip, wassuccess, timestamp) {
    if (wassuccess) {
        wassuccess = <CheckCircleIcon color="primary"/>;
    } else {
        wassuccess = <CancelIcon color="secondary"/>;
    }
    return { ip, wassuccess, timestamp };
}

const fakerows = [
    createData('Frozen yoghurt', 1, 6.0),
    createData('Ice cream sandwich', 0, 9.0),
    createData('Eclair', 1, 16.0),
    createData('Cupcake', 0, 3.7),
    createData('Gingerbread', 1, 16.1),
];

class LoginAttempts extends Component {
    constructor() {
        super();
        this.state = {
            rows: {}
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                direction="row"
                justify="center"
                align-items="center"
                className={classes.pageSpacing}
            >
                <Grid item className={classes.cardSize}>
                    <LoginAttemptCard
                        rows={fakerows}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(LoginAttempts);