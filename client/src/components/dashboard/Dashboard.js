import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getAuthoredTickets, getAssignedTickets, getTeamTickets, getAllTickets, clearTickets, clearTicketDetails, getTeams } from "../../actions/dashboardActions";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import TicketCard from "./TicketCard";
import TeamCard from "./TeamCard";

import { Grid, withStyles, Modal, Button, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const styles = theme => ({
    w100: {
        width: "100%"
    },
    border: {
        border: "1px solid black"
    },
    noStyling: {
      textDecoration: "none"
    },
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

    componentDidMount = () => {
        const { getAuthoredTickets, getAssignedTickets, getTeamTickets, getAllTickets, auth, getTeams } = this.props;
        getAuthoredTickets(auth.user.id);
        getAssignedTickets(auth.user.id);

        if (auth.user.teams && auth.user.teams.length > 0) {
            getTeamTickets(auth.user.teams[0].team_id);
        }

        getAllTickets();

        getTeams(auth.user.id);
    }

    componentWillUnmount = () => {
        this.props.clearTickets();
    }

    handleClose = (event) => {
        event.preventDefault();
        this.props.clearTicketDetails();
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

    getTableTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    width: "100px"
                }
            }
        }
    })

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

        let authoredTicketData = [];
        if (dashboard.tickets_overview.authored && dashboard.tickets_overview.authored.length > 0) {
            authoredTicketData = dashboard.tickets_overview.authored.map(ticket => {
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

        let assignedTicketData = [];
        if (dashboard.tickets_overview.assigned && dashboard.tickets_overview.assigned.length > 0) {
            assignedTicketData = dashboard.tickets_overview.assigned.map(ticket => {
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

        let teamsTicketData = [];
        if (dashboard.tickets_overview.team && dashboard.tickets_overview.team.length > 0) {
            teamsTicketData = dashboard.tickets_overview.team.map(ticket => {
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

        let allTicketData = [];
        if (dashboard.tickets_overview.all && dashboard.tickets_overview.all.length > 0) {
            allTicketData = dashboard.tickets_overview.all.map(ticket => {
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

        const handleAuthoredRowClick = (rowData, rowMeta) => {
            this.handleModalOpen(authoredTicketData[rowMeta.dataIndex].ticket_id);
        };

        const handleAssignedRowClick = (rowData, rowMeta) => {
            this.handleModalOpen(assignedTicketData[rowMeta.dataIndex].ticket_id);
        };

        const handleTeamRowClick = (rowData, rowMeta) => {
            this.handleModalOpen(teamsTicketData[rowMeta.dataIndex].ticket_id);
        };
        
        const handleAllRowClick = (rowData, rowMeta) => {
            this.handleModalOpen(allTicketData[rowMeta.dataIndex].ticket_id);
        };

        const authoredOptions = {
            onRowClick: handleAuthoredRowClick
        };

        const assignedOptions = {
            onRowClick: handleAssignedRowClick
        }

        const teamsOptions = {
            onRowClick: handleTeamRowClick
        }

        const allOptions = {
            onRowClick: handleAllRowClick
        }

        return (
            <Grid container direction="column" justify="flex-start" alignItems="center" spacing={4} className={classes.w100}>
                <Grid item sm={12}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Link to="/loginattempts" className={classes.noStyling}>
                                <IconButton>
                                    <AccountCircleIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <TeamCard
                                teams={this.props.dashboard ? { assignedTeams: this.props.dashboard.teams, isLoading: this.props.teams_loading } : undefined}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <MuiThemeProvider theme={this.getTableTheme()}>
                        <MUIDataTable
                            title={"Your Submitted Tickets"}
                            data={authoredTicketData}
                            columns={columns}
                            options={authoredOptions}
                            className={classes.w100}
                        />
                    </MuiThemeProvider>
                </Grid>
                <Grid item xs={10}>
                    <MuiThemeProvider theme={this.getTableTheme()}>
                        <MUIDataTable
                            title={"Tickets Assigned To You"}
                            data={assignedTicketData}
                            columns={columns}
                            options={assignedOptions}
                            
                        />
                    </MuiThemeProvider>
                </Grid>
                <Grid item xs={10}>
                    <MuiThemeProvider theme={this.getTableTheme()}>
                        <MUIDataTable
                            title={"Tickets Assigned To Your Team"}
                            data={teamsTicketData}
                            columns={columns}
                            options={teamsOptions}
                            
                        />
                    </MuiThemeProvider>
                </Grid>
                <Grid item xs={10}>
                    <MuiThemeProvider theme={this.getTableTheme()}>
                        <MUIDataTable
                            title={"All Tickets"}
                            data={allTicketData}
                            columns={columns}
                            options={allOptions}
                            
                        />
                    </MuiThemeProvider>
                </Grid>
                <Grid item>
                    <Link to="/tickets/create" className={classes.noStyling}>
                        <Button variant="contained" color="primary">Submit New Ticket</Button>
                    </Link>
                </Grid>
                <Modal open={this.state.isModalOpen} onClose={this.handleClose}>
                    <TicketCard 
                        ticketId={this.state.examinedTicketId}
                    />
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

export default connect(mapStateToProps, {getAuthoredTickets, getAssignedTickets, getTeamTickets, getAllTickets, clearTickets, clearTicketDetails, getTeams})(withStyles(styles)(Dashboard));