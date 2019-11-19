import React, { Component } from 'react'
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getOverviewUserTickets } from "../../actions/dashboardActions";


import { Grid, Card, CardContent, withStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

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
        getOverviewUserTickets(auth.user.id, auth.user.team);
    }

    render() {
        const { classes, dashboard } = this.props;

        const columns = ["Title", "Current Status", "Priority", "Item", "Type", "Category", "Author", "Creation Date"];
        let data = [];
        if (dashboard.tickets.length > 0) {
            data = dashboard.tickets.map(ticket => {
                return [ticket.title, ticket.current_status, ticket.priority, ticket.item_name, ticket.type_name, ticket.category_name, ticket.author_name, ticket.creation_date];
            });
        }
        const options = {
            filterType: "checkbox"
        };

        return (
            <Grid className={classes.w100} container direction="column" justify="flex-start" alignItems="center">
                <Grid item xs={12}>
                    <MUIDataTable
                        title={"Open Tickets"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
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