import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from "react-redux";
import { getTicketDetails } from "../../actions/dashboardActions";

class TicketCard extends Component {
    componentDidMount = () => {
        const { getTicketDetails, ticketId } = this.props;
        getTicketDetails(ticketId);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

TicketCard.propTypes = {
    ticketId: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

export default connect(mapStateToProps, { getTicketDetails })(TicketCard);