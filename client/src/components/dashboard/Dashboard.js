import React, { Component } from 'react'
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getOverviewUserTickets } from "../../actions/dashboardActions";

import TicketCard from "./TicketCard";

import { Grid, withStyles, Modal } from "@material-ui/core";
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

        this.state = {
            examinedTicketId: null,
            isModalOpen: false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
    }

    handleClose = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            examinedTicketId: {},
            isModalOpen: false
        });
    }

    handleModalOpen = (ticket_id) => {
        this.setState({
            ...this.state,
            examinedTicketId: ticket_id,
            isModalOpen: true
        })
    }

    componentDidMount = () => {
        const { getOverviewUserTickets, auth } = this.props;
        getOverviewUserTickets(auth.user.id, auth.user.team);
    }

    render() {
        const { classes, dashboard } = this.props;

        const columns = [
            {name: "title", label: "Title"},
            {name: "current_status", label: "Current Status"},
            {name: "priority", label: "Priority"},
            {name: "item", label: "Item"},
            {name: "type", label: "Type"},
            {name: "category", label: "Category"},
            {name: "author", label: "Author"},
            {name: "creation_date", label: "Creation Date"}
        ];

        let ticketData = [];
        if (dashboard.tickets_overview.length > 0) {
            ticketData = dashboard.tickets_overview.map(ticket => {
                return {
                    title: ticket.title,
                    current_status: ticket.current_status,
                    priority: ticket.priority,
                    item: ticket.item_name,
                    type: ticket.type_name,
                    category: ticket.category_name,
                    author: ticket.author_name,
                    creation_date: ticket.creation_date.substring(0, 10),
                    ticket_id: ticket.ticket_id
                };
            });
        }

        const handleRowClick = (rowData, rowMeta) => {
            this.handleModalOpen(ticketData[rowMeta.dataIndex].ticket_id);
        };

        const options = {
            onRowClick: handleRowClick
        };

        return (
            <Grid className={classes.w100} container direction="column" justify="flex-start" alignItems="center">
                <Grid item xs={12}>
                    <MUIDataTable
                        title={"Open Tickets"}
                        data={ticketData}
                        columns={columns}
                        options={options}
                    />
                </Grid>
                <Modal open={this.state.isModalOpen} onClose={this.handleClose}>
                    <TicketCard ticketId={this.state.examinedTicketId}/>
                </Modal>
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