import React, { Component } from "react";

import { withStyles, Grid, Typography, Card, CardContent } from "@material-ui/core";


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
        return (<p>Test</p>);
    }
}

export default withStyles(styles)(AnalyticsDashboard);