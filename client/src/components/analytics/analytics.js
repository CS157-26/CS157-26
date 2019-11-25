import React, { Component } from "react";

import { withStyles, Grid, Typography, Card, CardContent, Container } from "@material-ui/core";


const styles = theme=>({});

class AnalyticsDashboard extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount = () => {
        setInterval(100, ()=>{});
    }

    render() {
        const {classes} = this.props;
        return (
        <Grid container justify="center" spacing={3}>
            <Grid item>
                <Card>
                    <CardContent>
                        <p>Open Tickets By Team -Bar Chart-</p>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <CardContent>
                        <p>Average Resoltion Time -Bar Chart-</p>
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

export default withStyles(styles)(AnalyticsDashboard);