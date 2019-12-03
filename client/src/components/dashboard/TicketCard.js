import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getTicketDetails } from "../../actions/dashboardActions";

import { Grid, Card, CardContent, Typography, CircularProgress, withStyles, Button } from "@material-ui/core";

const styles = theme => ({
    h100: {
        height: "100%"
    },
    w100: {
        width: "100%"
    },
    heading: {
        color: "#95a5a6"
    },
    unbold: {
        fontWeigh: "normal"
    }
});

class TicketCard extends Component {
    componentDidMount = () => {
        const { getTicketDetails, ticketId } = this.props;
        getTicketDetails(ticketId);
    }

    render() {
        const { dashboard, classes } = this.props;

        let content;
        if (dashboard.details_loading === true || (Object.entries(dashboard.ticket_details).length === 0 && dashboard.ticket_details.constructor === Object)) {
            content = <CircularProgress />;
        } else {
            const {ticket_id, title, author_name, content_text, current_status, priority, creation_date, modification_date, protected_status, item_name, type_name, category_name, comments, assignees} = dashboard.ticket_details;
            
            let assigneesMarkup = assignees.map(assignee => {
                return (<Typography variant="body1">{assignee.username}</Typography>);
            });

            let commentsMarkup;
            if (comments.length > 0) {
                commentsMarkup = comments.map(comment => {
                    return (
                        <Grid item xs={12}>
                            <Grid container direction="row" justify="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.heading}>User {comment.author_id}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.heading}>Posted on: {comment.creation_date.substring(0, 10)}</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body1">
                                {comment.content_text}
                            </Typography>
                        </Grid>
                    );
                });
            } else {
                commentsMarkup = (
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" className={classes.heading}>There are no comments for this ticket.</Typography>
                    </Grid>
                );
            }

            content = (
                <Grid container direction="column" justify="center" spacing={2}>
                    <Grid item xs={12} className={classes.w100}>
                        <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
                            <Grid item>
                                <Typography variant="h5">{title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" display="inline" className={classes.heading}>ID: </Typography>
                                <Typography variant="subtitle1" display="inline" className={classes.unbold}>{ticket_id}</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="body1">{content_text}</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.w100}>
                        <hr/>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" className={classes.heading}>Author:</Typography>
                        <Typography variant="body1">{author_name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" className={classes.heading}>Assignees:</Typography>
                        {assigneesMarkup}
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="space-between" alignItems="center" spacing={4}>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.heading}>Current Status:</Typography>
                                <Typography variant="body1">{current_status}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.heading}>Priority:</Typography>
                                <Typography variant="body1">{priority}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.heading}>Protected: </Typography>
                                <Typography variant="body1">{protected_status ? "True" : "False"}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.w100}>
                        <Grid container direction="row" justify="space-between" alignItems="center" spacing={4}>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.heading}>Item:</Typography>
                                <Typography variant="body1">{item_name}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.heading}>Type:</Typography>
                                <Typography variant="body1">{type_name}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.heading}>Category:</Typography>
                                <Typography variant="body1">{category_name}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justify='space-between' alignItems="center" spacing={4}>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.heading}>Created on:</Typography>
                                <Typography variant="body1">{creation_date.substring(0, 10)}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.heading}>Modified on:</Typography>
                                <Typography variant="body1">{modification_date.substring(0, 10)}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.w100}>
                        <hr/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Comments</Typography>
                    </Grid>
                    {commentsMarkup}
                    <Grid item>
                        <Link to = {{
                            pathname: "/comment",
                            ticket_id: this.props.ticketId
                        }}
                        >
                            <Button variant="contained">Add Comment</Button>
                        </Link>
                    </Grid>
                </Grid>
            );
        }

        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <Card>
                        <CardContent>
                            {content}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
        // TODO: Display the teams the user is part of & Display comments made by the user.
    }
}

TicketCard.propTypes = {
    ticketId: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

export default connect(mapStateToProps, { getTicketDetails })(withStyles(styles)(TicketCard));