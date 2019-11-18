import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";


const useStyles = makeStyles(theme => ({
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
    noLabel: {
        marginTop: theme.spacing(3),
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
}));

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

const types = [
    { value: 1, name: 'Alpha' },
    { value: 2, name: 'Bravo' },
    { value: 3, name: 'Charlie' },
    { value: 4, name: 'Delta' },
    { value: 5, name: 'Echo' },
    { value: 6, name: 'Foxtrot' },
    { value: 7, name: 'Golf' },
    { value: 8, name: 'Hotel' },
    { value: 9, name: 'India' },
    { value: 10, name: 'Juliet' },
];
const teams = ['abcdef', '123456', 'qwerty'];

const fakeData = {
    teams: teams,
    types: types
}

function getStyles(type, typeValue, theme) {
    return {
        fontWeight:
            typeValue.indexOf(type) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function TeamCreation() {
    const classes = useStyles();
    const theme = useTheme();

    const [typeValue, setTypeValue] = React.useState([]);
    const [teamName, setTeamName] = React.useState("");
    const [teamNameError, setTeamNameError] = React.useState("");
    const [existingData, setExistingData] = React.useState(fakeData);

    React.useEffect(() => {
        axios.get("/api/teams/data")
            .then(res => setExistingData(res.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);



    const handleChange = event => {
        setTypeValue(event.target.value);
    };

    const validateTeamName = value => {
        let error = "";
        if (value.length < 6) {
            error = "You must enter a team name longer than 5 characters";
        } else if (existingData.teams.indexOf(value) !== -1) {
            error = "That team name already exists"
        }
        setTeamNameError(error);

    }

    const handleTextChange = event => {
        setTeamName(event.target.value);
        validateTeamName(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const teamNameError = validateTeamName(teamName);
        const numTypes = typeValue.length;
        if (numTypes > 0 && teamNameError === "") {
            const result = {
                name: teamName,
                types: typeValue.map(type => {
                    return type.value;
                })
            }
            console.log(result);
        }
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            align-items="center"
            className={classes.pageSpacing}
        >
            <Grid item className={classes.cardSize}>
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
                                            name="teamNameField"
                                            label="Team Name"
                                            onChange={handleTextChange}
                                            helperText={teamNameError}
                                            error={teamNameError.length === 0 ? false : true}
                                            className={classes.textField}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" alignItems="center">
                                            <Grid item></Grid>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="mutiple-chip-label">Types</InputLabel>
                                                <Select
                                                    labelid="mutiple-chip-label"
                                                    id="mutiple-chip"
                                                    multiple
                                                    value={typeValue}
                                                    onChange={handleChange}
                                                    input={<Input id="select-multiple-chip" />}
                                                    renderValue={selected => (
                                                        <div className={classes.chips}>
                                                            {selected.map(value => (
                                                                <Chip key={value.value} label={value.name} className={classes.chip} />
                                                            ))}
                                                        </div>
                                                    )}
                                                    MenuProps={MenuProps}
                                                >
                                                    {existingData.types.map(type => (
                                                        <MenuItem key={type.value} value={type} style={getStyles(type.name, typeValue, theme)}>
                                                            {type.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
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
                                        onClick={handleSubmit}
                                        disabled={(typeValue < 1) || (teamName.length < 5)}
                                    >
                                        CREATE TEAM
                                </Button>
                                </Grid>

                            </Grid>
                        </Grid>
                    </CardContent>
                </Card >
            </Grid>
        </Grid >
    );
}
