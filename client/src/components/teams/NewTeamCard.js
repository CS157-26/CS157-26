import React from "react";

import {
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    Button,
    withStyles
} from "@material-ui/core";

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

function NewTeamCard(props) {
    const {
        handleChange,
        inputValidation,
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
                                <Typography variant="h5">Create a new Team:</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="column" justify="center" spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    name="teamnameField"
                                    label="Team Name *"
                                    onChange={handleChange}
                                    helperText={
                                        inputValidation.teamnameField.length === 0
                                            ? " "
                                            : inputValidation.teamnameField
                                    }
                                    error={inputValidation.teamnameField.length === 0 ? false : true}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item>

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
                                <Button className={classes.backButton}>BACK</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={validateInput}
                                >
                                    CREATE TEAM
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(NewTeamCard);
