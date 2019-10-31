import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  IconButton,
  Button,
  withStyles
} from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

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
  }
});

function RegisterCard(props) {
  const {
    passwordVisible,
    inputValidation,
    handleChange,
    validateInput,
    classes
  } = props;

  const toggleIcon = visibility => {
    if (visibility === true) {
      return <VisibilityIcon />;
    } else {
      return <VisibilityOffIcon />;
    }
  };

  const handlePasswordVisibility = e => {
    e.preventDefault();
    props.toggleVisibility("password");
  };

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
            <Typography variant="h5">Account login:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="column" justify="center" spacing={1}>
              <Grid item xs={12}>
                <TextField
                  name="emailField"
                  label="Email *"
                  onChange={handleChange}
                  helperText={
                    inputValidation.emailField.length === 0
                      ? " "
                      : inputValidation.emailField
                  }
                  error={inputValidation.emailField.length === 0 ? false : true}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <TextField
                      name="passwordField"
                      label="Password *"
                      type={passwordVisible === false ? "password" : "string"}
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
                    />
                  </Grid>
                  <Grid item>
                    <IconButton size="small" onClick={handlePasswordVisibility}>
                      {toggleIcon(passwordVisible)}
                    </IconButton>
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
                <Button className={classes.backButton}>BACK</Button>
              </Grid>
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
                  Create an Account
                </Link>
              </span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

RegisterCard.propTypes = {
  emailField: PropTypes.string,
  passwordField: PropTypes.string,
  passwordVisible: PropTypes.bool,
  toggleVisibility: PropTypes.func,
  handleChange: PropTypes.func,
  validateInput: PropTypes.func
};

export default withStyles(styles)(RegisterCard);