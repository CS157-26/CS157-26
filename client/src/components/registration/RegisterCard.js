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

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import PersonAddIcon from "@material-ui/icons/PersonAdd";
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
  },
  textField: {
    width: "15em"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
});

function RegisterCard(props) {
  const {
    passwordVisible,
    passwordVerifyVisible,
    inputValidation,
    handleChange,
    validateInput,
    availableTeams,
    selectedTeams,
    handleTeamChange,
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

  const handlePasswordVerifyVisibility = e => {
    e.preventDefault();
    props.toggleVisibility("passwordVerify");
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
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
                <Typography variant="h5">Create your PIM account:</Typography>
              </Grid>
            </Grid>
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
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="usernameField"
                  label="Username *"
                  onChange={handleChange}
                  helperText={
                    inputValidation.usernameField.length === 0
                      ? " "
                      : inputValidation.usernameField
                  }
                  error={
                    inputValidation.usernameField.length === 0 ? false : true
                  }
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <TextField
                      name="passwordField"
                      label="Password **"
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
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton size="small" onClick={handlePasswordVisibility}>
                      {toggleIcon(passwordVisible)}
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <TextField
                      name="passwordVerifyField"
                      label="Verify password *"
                      type={
                        passwordVerifyVisible === false ? "password" : "string"
                      }
                      onChange={handleChange}
                      helperText={
                        inputValidation.passwordVerifyField.length === 0
                          ? " "
                          : inputValidation.passwordVerifyField
                      }
                      error={
                        inputValidation.passwordVerifyField.length === 0
                          ? false
                          : true
                      }
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton
                      size="small"
                      onClick={handlePasswordVerifyVisibility}
                    >
                      {toggleIcon(passwordVerifyVisible)}
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="mutiple-chip-label">Teams</InputLabel>
                  <Select
                    labelid="mutiple-chip-label"
                    id="mutiple-chip"
                    multiple
                    value={selectedTeams}
                    onChange={handleTeamChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                      <div className={classes.chips}>
                        {selected.map(value => (
                          <Chip key={value.team_id} label={value.name} className={classes.chip} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {availableTeams.map(type => (
                      <MenuItem key={type.team_id} value={type}>
                        {type.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                  CREATE ACCOUNT
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.caption}>
              Already have an account?{" "}
              <span>
                <Link to="/login" className={classes.link}>
                  Sign in
                </Link>
              </span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.caption}>
              ** At least 5 lowercase, 1 uppercase, 1 numeric, and 1 special
              characters
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
  passwordVerifyField: PropTypes.string,
  passwordVisible: PropTypes.bool,
  passwordVerifyVisible: PropTypes.bool,
  toggleVisibility: PropTypes.func,
  handleChange: PropTypes.func,
  validateInput: PropTypes.func
};

export default withStyles(styles)(RegisterCard);
