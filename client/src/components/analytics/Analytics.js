import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import {Chart} from 'react-google-charts';
import { withStyles, Grid, Typography, Card, CardContent, Container, Select, MenuItem, InputLabel } from "@material-ui/core";
import { getAverageResolve, getOpenTickets, getTicketHistory } from "../../actions/analyticsActions";

const styles = theme=>({
    title_label: {
        fontSize: "54px",
        fontFamily: "Roboto Condensed, sans-serif",
        margin: 30,
        padding: 30,
      },
});

class AnalyticsDashboard extends Component {
    constructor() {
        super();
        this.state = {ticket_history_teamid: -1};
    }
    componentDidMount = () => {
        setInterval(100, ()=>{});
        const { getAverageResolve, getOpenTickets, getTicketHistory, auth } = this.props;
        getOpenTickets();
        getAverageResolve();
        let team_id = auth.user.teams[0].team_id;
        this.state.ticket_history_teamid = team_id;
        let now = moment().format('YYYY-MM-DD hh:mm:ss');
        let before = moment().subtract(1, 'year').format('YYYY-MM-DD hh:mm:ss');
        let step = 24;
        getTicketHistory(team_id, before, now, step);
    }
    buildTeamSelect() {
        const { auth } = this.props;
        
        const items = auth.user.teams.map(team_data => {
        return <MenuItem key={team_data.team_id} value={team_data.team_id}>{team_data.name}</MenuItem>
        });
        return (items)
    }
    retrieveTicketHistory = (e) => {
        const {getTicketHistory} = this.props;
        let team_id = e.target.value;
        this.state.ticket_history_teamid = team_id;
        let now = moment().format('YYYY-MM-DD hh:mm:ss');
        let before = moment().subtract(1, 'year').format('YYYY-MM-DD hh:mm:ss');
        let step = 24;
        getTicketHistory(team_id, before, now, step);
    }
    adjustGraphResolution = (e) => {
        const {getTicketHistory} = this.props;
        let team_id = this.state.ticket_history_teamid;
        // calculate the min and max range by the zoom range
        // get a new ticket history and update the graph
    }
    render() {
        const { classes, analytic, auth } = this.props;
        return (
        <Grid container>
            <Grid item>
                <p className={classes.title_label}>Analytics Center</p>
            </Grid>
            <Grid item container justify="center" spacing={3}>
                <Grid item>
                    <Card>
                        <CardContent>
                            {analytic.open_tickets_data_loaded &&
                            <Chart 
                                width={'500px'}
                                height={'300px'}
                                chartType="BarChart" 
                                data={[['Team', 'Number of Open Tickets']]
                                    .concat(
                                        analytic.open_tickets_data.map(
                                            entry=>{return [entry.name, entry.open_tickets];}))
                                    }
                                options={{
                                    title: 'Number of Open Tickets',
                                    chartArea: {width: '100%'},
                                    hAxis: {
                                        title: 'Open Tickets',
                                        minValue: 0,
                                    },
                                    vAxis: {
                                        title: 'Team',
                                    },
                                }}
                                rootProps={{'data-testid':1}}
                                    />}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            {analytic.avg_resolve_data_loaded &&
                            <Chart 
                                width={'500px'}
                                height={'300px'}
                                chartType="BarChart" 
                                data={[['Team', 'Resolution Time By Team']]
                                    .concat(
                                        analytic.avg_resolve_data.map(
                                            entry=>{return [entry.name, entry.avg_days];}))
                                    }
                                options={{
                                    title: 'Resolution Time By Team',
                                    chartArea: {width: '100%'},
                                    hAxis: {
                                        title: 'Days',
                                        minValue: 0,
                                    },
                                    vAxis: {
                                        title: 'Team',
                                    },
                                }}
                                rootProps={{'data-testid':1}}
                                    />}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            {analytic.ticket_history_loaded &&
                            <Chart 
                                width={'500px'}
                                height={'300px'}
                                chartType="LineChart"
                                data={[[{type: 'date', label:'Time'},
                                        'Tickets']]
                                .concat(
                                    analytic.ticket_history.values.map(
                                        entry=>{let date = moment(entry.date); return [new Date(date.year(), date.month(), date.date(), date.hour(), date.minute()), entry.val[0].open_count];}
                                    ))}
                                options={{
                                    title: 'Ticket History for Team '+analytic.ticket_history.team_id, // need to add the actual team name to the api
                                    chartArea: {width: '100%'},
                                    hAxis: {
                                        title: 'Days',
                                    },
                                    vAxis: {
                                        title: 'Tickets Open',
                                        minValue: 0,
                                    },
                                    explorer: {
                                        maxZoomOut: 2,
                                        keepInBounds: true,
                                    },
                                }}
                                rootProps={{'data-testid':1}}
                                chartPackages={['corechart', 'controls']}
                            />}
                            {(auth.user.teams.length > 0) && 
                            <InputLabel id="team_select_label">Team</InputLabel>}
                            {(auth.user.teams.length > 0) && 
                            <Select 
                                    id='team_history_select'
                                    value={auth.user.teams[0].team_id}
                                    onChange={this.retrieveTicketHistory}>
                                {this.buildTeamSelect()}
                            </Select>}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        );
    }
}

AnalyticsDashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    analytic: PropTypes.object.isRequired
};

const mapStateToProps = state=>({
    auth: state.auth,
    analytic: state.analytic
});

export default connect(mapStateToProps, { getAverageResolve, getOpenTickets, getTicketHistory })(withStyles(styles)(AnalyticsDashboard));
