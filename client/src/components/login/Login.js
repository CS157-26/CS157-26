import React, { Component } from "react";

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
      passwordField: "",
      passwordVisible: false,
      inputValidation: {
        emailField: "",
        passwordField: "",
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
    }
  };

  validateInput = () => {
    let validationResults = {
      emailField: "",
      passwordField: "",
    };

    if (this.state.emailField.length > 0) {
      const emailRegex = new RegExp(
        "/^[^\\.](?!.*\\.\\.)[\\w\\.\\-\\+_]*[^\\.@]@[^\\.\\-\\_][\\w\\.\\-\\+_]+\\.(?!.*web)[\\w\\.\\-\\+_\\[\\]]{2,}$/"
      );
      if (emailRegex.test(this.state.emailField) === true) {
      } else {
        validationResults.emailField = "Please enter a valid email.";
      }
    } else {
      validationResults.emailField = "Please enter your email.";
    }

    if (this.state.passwordField.length > 0) {
      if (this.state.passwordField.length >= 8) {
        const passRegex1 = new RegExp("[a-z]{5,}");
        const passRegex2 = new RegExp("[A-Z]{1,}");
        const passRegex3 = new RegExp("[0-9]{1,}");
        const passRegex4 = new RegExp("^(.*)$");
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

    this.setState({
      ...this.state,
      inputValidation: validationResults
    });

    // TODO: Call Backend for login
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
            passwordVisible={this.state.passwordVisible}
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

export default withStyles(styles)(Login);