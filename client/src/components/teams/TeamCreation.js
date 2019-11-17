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
            assignedTypes: {},
            inputValidation: {
                teamnameField: "",
                assignedTypes: ""
            }
        };
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    validateInput = () => {
        let validationResults = {
            teamnameField: "",
            assignedTypes: ""
        };

        if (this.state.teamnameField.length > 0) {
            // check if name exists
        } else {
            validationResults.teamnameField = "Please enter a new team name.";
        }

        if (Object.keys(this.state.assignedTypes).length < 1) {
            validationResults.usernameField = "Assigned types cannot be empty.";
        }

        if (
            validationResults.teamnameField === "" &&
            validationResults.assignedTypes === ""
        ) {
            const newTeam = {
                name: this.state.teamnameField,
                types: this.state.assignedTypes
            };
            console.log(newTeam);
            //this.props.createTeam(newTeam, this.props.history);
        }

        this.setState({
            ...this.state,
            inputValidation: validationResults
        });
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
                        inputValidation={this.state.inputValidation}
                        validateInput={this.validateInput}
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
