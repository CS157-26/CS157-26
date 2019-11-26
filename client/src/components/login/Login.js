import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/loginActions";
import PropTypes from "prop-types";

import LoginCard from "./LoginCard";

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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailField: "",
      usernameField: "",
      passwordField: "",
      inputValidation: {
        emailField: "",
        passwordField: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
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
      emailField: "",
      passwordField: ""
    };

    if (this.state.emailField.length > 0) {
    } else {
      validationResults.emailField = "Please enter your email.";
    }

    if (this.state.passwordField.length > 0) {
    } else {
      validationResults.passwordField = "Password field cannot be empty.";
    }

    if (
      validationResults.emailField === "" &&
      validationResults.passwordField === ""
    ) {
      const newUser = {
        email: this.state.emailField,
        password: this.state.passwordField
      };
      this.props.loginUser(newUser, this.props.history);
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
          <LoginCard
            emailField={this.state.emailField}
            passwordField={this.state.passwordField}
            inputValidation={this.state.inputValidation}
            handleChange={this.handleChange}
            validateInput={this.validateInput}
          />
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withStyles(styles)(Login));
