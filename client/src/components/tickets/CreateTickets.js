import React, { Component } from 'react'
import PropTypes from "prop-types";

import { withStyles, Card, CardContent, Grid } from "@material-ui/core";

const styles = theme => ({

});

class CreateTickets extends Component {
    constructor() {
        super();

        this.state = {};
    }
    
    render() {
        return (
            <Card>
                <CardContent>
                    <Grid item
                </CardContent>
            </Card>
        )
    }
}

CreateTickets.propTypes = {};

export default withStyles(styles)(CreateTickets);