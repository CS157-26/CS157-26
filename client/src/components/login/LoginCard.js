import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";

import PersonAddIcon from "@material-ui/icons/PersonAdd";

const styles = theme => ({
  border: {
    border: "3px solid red"
  },
  m2: {
    marginTop: "1em"
  },
  caption: {
    color: "#7f8c8d"
  },
  link: {
    textDecoration: "none"
  },
  textField: {
    width: "15em"
  }
});

function LoginCard(props) {
  const {
    inputValidation,
    handleChange,
    validateInput,
    classes
  } = props;

  return (
    <Card className={classes.cardWidth}>
      <CardContent>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <PersonAddIcon />
              </Grid>
              <Grid item>
                <Typography variant="h5">Log into your account:</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="column" justify="center" spacing={1}>
              <Grid item xs={12}>
                <TextField
                  name="emailField"
                  label="Email"
                  onChange={handleChange}
                  helperText={
                    inputValidation.emailField.length === 0
                      ? " "
                      : inputValidation.emailField
                  }
                  error={inputValidation.emailField.length === 0 ? false : true}
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <TextField
                      name="passwordField"
                      label="Password"
                      type="password"
                      onChange={handleChange}
                      helperText={
                        inputValidation.passwordField.length === 0
                          ? " "
                          : inputValidation.passwordField
                      }
                      error={
                        inputValidation.passwordField.length === 0
                          ? false
                          : true
                      }
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.m2}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={validateInput}
                >
                  LOGIN
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.caption}>
              Don't have an account?{" "}
              <span>
                <Link to="/registration" className={classes.link}>
                  Register
                </Link>
              </span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

LoginCard.propTypes = {
  emailField: PropTypes.string,
  passwordField: PropTypes.string,
  handleChange: PropTypes.func,
  validateInput: PropTypes.func
};

export default withStyles(styles)(LoginCard);
