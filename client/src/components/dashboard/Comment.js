import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
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
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "20em",
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

export default function Comment(props) {
    const classes = useStyles();
    const ticket_id = 1;

    const fakeUsers = [
        { id: 1, name: "test1" },
        { id: 2, name: "test2" },
        { id: 3, name: "test3" },
        { id: 4, name: "test4" },
        { id: 5, name: "test5" },
    ];

    const user_id = useSelector(state => state.auth.user.id);
    const [commentText, setCommentText] = React.useState("");
    const [currentStatus, setCurrentStatus] = React.useState("");
    const [priority, setPriority] = React.useState(0);
    const [protectedStatus, setProtectedStatus] = React.useState(false);
    const [assignee, setAssignee] = React.useState(0);
    const [availUsers, setAvailUsers] = React.useState(fakeUsers);

    const setTicketData = data => {
        setCurrentStatus(data.current_status);
        setPriority(data.priority);
        data.protected_status ? setProtectedStatus(true) : setProtectedStatus(false);
        data.assignees[0] ? setAssignee(data.assignees[0]) : setAssignee(0);

        axios.get("api/teamcreation/members", {
            params: {
                itemid: data.item_id
            }
        })
            .then(res => setAvailUsers(res.data))
            .catch((err) => {
                console.log(err);
            });
    }

    React.useEffect(() => {
        axios.post("api/tickets/details", { ticket_id: ticket_id })
            .then(res => setTicketData(res.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);



    const handleStatus = event => {
        setCurrentStatus(event.target.value);
    };

    const handlePriority = event => {
        setPriority(event.target.value);
    }

    const handleProtected = event => {
        setProtectedStatus(event.target.value);
    }

    const handleAssignee = event => {
        setAssignee(event.target.value);
    }

    const handleTextChange = event => {
        setCommentText(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const commentData = {
            ticket_id: ticket_id,
            author_id: user_id,
            content_text: commentText,
            current_status: currentStatus,
            priority: priority,
            protected_status: protectedStatus,
            assignee: assignee,
        }
        console.log(commentData);
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
                                        <Typography variant="h5">Add comment:</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column" justify="center" spacing={1}>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="standard-multiline-static"
                                            label="Comment"
                                            placeholder="Enter comment here"
                                            multiline
                                            rows="4"
                                            className={classes.textField}
                                            margin="normal"
                                            onChange={handleTextChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel>Current Status</InputLabel>
                                                    <Select
                                                        value={currentStatus}
                                                        onChange={handleStatus}
                                                    >
                                                        <MenuItem value={"PENDING"}>Pending</MenuItem>
                                                        <MenuItem value={"ASSIGNED"}>Assigned</MenuItem>
                                                        <MenuItem value={"WIP"}>Work in Progress</MenuItem>
                                                        <MenuItem value={"RESOLVED"}>Resolved</MenuItem>
                                                        <MenuItem value={"CLOSED"}>Closed</MenuItem>
                                                    </Select>
                                                    <FormHelperText>Set Ticket Status</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel>Priority</InputLabel>
                                                    <Select
                                                        value={priority}
                                                        onChange={handlePriority}
                                                    >
                                                        <MenuItem value={1}>Priority 1</MenuItem>
                                                        <MenuItem value={2}>Priority 2</MenuItem>
                                                        <MenuItem value={3}>Priority 3</MenuItem>
                                                        <MenuItem value={4}>Priority 4</MenuItem>
                                                        <MenuItem value={5}>Priority 5</MenuItem>
                                                    </Select>
                                                    <FormHelperText>Set Ticket Priority</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel>Assignee</InputLabel>
                                                    <Select
                                                        value={assignee}
                                                        onChange={handleAssignee}
                                                    >
                                                        {availUsers.map(user => (
                                                            <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                                                        ))}
                                                    </Select>
                                                    <FormHelperText>Set Assignee</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel>Protected Status</InputLabel>
                                                    <Select
                                                        value={protectedStatus}
                                                        onChange={handleProtected}
                                                    >
                                                        <MenuItem value={true}>Protected</MenuItem>
                                                        <MenuItem value={false}>Not Protected</MenuItem>
                                                    </Select>
                                                    <FormHelperText>Set Protected Status</FormHelperText>
                                                </FormControl>
                                            </Grid>
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
                                        disabled={commentText === ""}
                                    >
                                        SUBMIT
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
