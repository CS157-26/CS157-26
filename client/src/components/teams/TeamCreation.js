import React, { Component } from "react";
import { connect } from "react-redux";
//import { registerUser } from "../../actions/registrationActions";

import NewTeamCard from "./NewTeamCard.js";

import { withStyles, Grid } from "@material-ui/core";

const styles = theme => ({
    pageSpacing: {
        paddingTop: "5em",
        paddingBottom: "5em"
    },
    cardSize: {
        [theme.breakpoints.up("sm")]: {
            width: "450px"
        },
        [theme.breakpoints.only("xs")]: {
            width: "100%"
        }
    },
    border: {
        border: "2px solid red"
    }
});

class TeamCreation extends Component {
    constructor() {
        super();
        this.state = {
            teamnameField: "",
            assignedTypes: {}
        };
    }

    handleChange = e => {
        e.preventDefault();

        const newTeam = {
            name: this.state.name,
            types: this.state.assignedTypes
        }
        console.log(newTeam);
        //this.props.createTeam(newTeam);
    };

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
                    <NewTeamCard
                        teamnameField={this.state.teamnameField}
                        assignedTypes={this.state.assignedTypes}
                        handleChange={this.handleChange}
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

export default connect(
    mapStateToProps,
    // { registerUser }
)(withStyles(styles)(TeamCreation));
