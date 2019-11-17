import React, { Component } from "react";
import { connect } from "react-redux";
import LoginAttemptCard from "./LoginAttemptCard";

import { withStyles, Grid } from "@material-ui/core";
import Axios from "axios";

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

class LoginAttempts extends Component {
    constructor() {
        super();
        this.state = {
            rows: []
        };
    }

    componentDidMount() {
        Axios.get('/api/attempts', {
            params: {
                user: this.props.auth.user.id
            }
        })
            .then(res => {
                this.setState({
                    rows: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
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
                        rows={this.state.rows}
                    />
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps)(withStyles(styles)(LoginAttempts));