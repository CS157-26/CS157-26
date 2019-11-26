import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import {Chart} from 'react-google-charts';
import { withStyles, Grid, Typography, Card, CardContent, Container } from "@material-ui/core";
import { getAverageResolve, getOpenTickets, getTicketHistory } from "../../actions/analyticsActions";

const styles = theme=>({});

class AnalyticsDashboard extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount = () => {
        setInterval(100, ()=>{});
        const { getAverageResolve, getOpenTickets, getTicketHistory, auth, analytic } = this.props;
        getOpenTickets();
        getAverageResolve();
        let now = moment();
        console.log(auth.user);
        //getTicketHistory()
    }

    render() {
        const { classes, analytic } = this.props;
        return (
        <Grid container justify="center" spacing={3}>
            <Grid item>
                <Card>
                    <CardContent>
                        <p>Open Tickets By Team -Bar Chart-</p>
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
                                  />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <CardContent>
                        <p>Average Resoltion Time -Bar Chart-</p>
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
                                  />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <CardContent>
                        <p>Open Ticket History for a Team -Line Plot-</p>
                    </CardContent>
                </Card>
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