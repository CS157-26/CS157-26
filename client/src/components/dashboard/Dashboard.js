import React, { Component } from 'react'
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getOverviewUserTickets } from "../../actions/dashboardActions";


import { Grid, Card, CardContent, withStyles } from "@material-ui/core";

const styles = theme => ({
    w100: {
        width: "100%"
    },
    border: {
        border: "1px solid black"
    }
});

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount = () => {
        const { getOverviewUserTickets, auth } = this.props;
        getOverviewUserTickets(auth.user.id);
    }

    render() {
        const { classes, dashboard } = this.props;

        let ticketsMarkup = {};

        if (dashboard.tickets.length > 0) {
            // TODO: Do individual markup of the ticket here
        }

        return (
            <Grid className={classes.w100} container direction="column" justify="flex-start" alignItems="center">
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        )
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    dashboard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    dashboard: state.dashboard
})

export default connect(mapStateToProps, {getOverviewUserTickets})(withStyles(styles)(Dashboard));