import React, { Component } from "react";

import RegisterCard from "./RegisterCard";

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

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      emailField: "",
      usernameField: "",
      passwordField: "",
      passwordVerifyField: "",
      passwordVisible: false,
      passwordVerifyVisible: false,
      inputValidation: {
        emailField: "",
        usernameField: "",
        passwordField: "",
        passwordVerifyField: ""
      }
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
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

  toggleVisibility = field => {
    if (field === "password") {
      this.setState({
        ...this.state,
        passwordVisible: !this.state.passwordVisible
      });
    } else if (field === "passwordVerify") {
      this.setState({
        ...this.state,
        passwordVerifyVisible: !this.state.passwordVerifyVisible
      });
    }
  };

  validateInput = () => {
    let validationResults = {
      emailField: "",
      usernameField: "",
      passwordField: "",
      passwordVerifyField: ""
    };

    if (this.state.emailField.length > 0) {
      const emailRegex = new RegExp("^[^s@]+@[^s@]+.[^s@]+$");
      if (emailRegex.test(this.state.emailField) === true) {
      } else {
        validationResults.emailField = "Please enter a valid email.";
      }
    } else {
      validationResults.emailField = "Please enter your email.";
    }

    if (this.state.usernameField.length > 0) {
      if (this.state.usernameField.length >= 8) {
      } else {
        validationResults.usernameField = "Username is too short.";
      }
    } else {
      validationResults.usernameField = "Username field cannot be empty.";
    }

    if (this.state.passwordField.length > 0) {
      if (this.state.passwordField.length >= 8) {
        const passRegex1 = new RegExp("[a-z]{5,}"); // Check if at least 5 lowercase letters
        const passRegex2 = new RegExp("[A-Z]{1,}"); // Check if at least 1 uppercase letter
        const passRegex3 = new RegExp("[0-9]{1,}"); // Check if at least 1 numerical character
        const passRegex4 = new RegExp("^(.*)$"); // Check if one word
        if (
          passRegex1.test(this.state.passwordField) === true &&
          passRegex2.test(this.state.passwordField) === true &&
          passRegex3.test(this.state.passwordField) === true &&
          passRegex4.test(this.state.passwordField) === true
        ) {
        } else {
          validationResults.passwordField = "Passwords is too weak.";
        }
      } else {
        validationResults.passwordField = "Password is too short.";
      }
    } else {
      validationResults.passwordField = "Password field cannot be empty.";
    }

    if (this.state.passwordVerifyField.length > 0) {
      if (this.state.passwordField === this.state.passwordVerifyField) {
      } else {
        validationResults.passwordVerifyField = "Passwords do not match.";
      }
    } else {
      validationResults.passwordVerifyField = "Please verify your password.";
    }

    this.setState({
      ...this.state,
      inputValidation: validationResults
    });

    // TODO: Call Backend for registration
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
          <RegisterCard
            emailField={this.state.emailField}
            passwordField={this.state.passwordField}
            passwordVerifyField={this.state.passwordVerifyField}
            passwordVisible={this.state.passwordVisible}
            passwordVerifyVisible={this.state.passwordVerifyVisible}
            inputValidation={this.state.inputValidation}
            toggleVisibility={this.toggleVisibility}
            handleChange={this.handleChange}
            validateInput={this.validateInput}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Registration);
