import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createTicket } from "../../actions/ticketActions";

import { withStyles, Card, CardContent, Grid, TextField, InputLabel, Select, MenuItem, Button, Typography, FormControl, FormHelperText } from "@material-ui/core";

const styles = theme => ({
    cardSize: {
        [theme.breakpoints.up("sm")]: {
            width: "750px"
        },
        [theme.breakpoints.only("xs")]: {
            width: "100%"
        }
    },
    w100: {
        width: "100%"
    },
    m2em: {
        marginBottom: "2em"
    }
});

class CreateTickets extends Component {
    constructor() {
        super();

        this.state = {
            category: "",
            type: "",
            item: "",
            title: "",
            contentText: "",
            priority: 0,
            inputValidation: {
                categoryError: " ",
                typeError: " ",
                itemError: " ",
                titleError: " ",
                contentTextError: " ",
                priorityError: " "
            }
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.cancelSubmision = this.cancelSubmision.bind(this);
    }

    componentDidMount = () => {}

    componentWillUnmount = () => {}

    handleTextChange = event => {
        event.preventDefault();
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSelectChange = event => {
        event.preventDefault();
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    validateInput = event => {
        event.preventDefault();
        const {category, type, item, title, contentText, priority} = this.state;

        let inputValidation = {
            categoryError: " ",
            typeError: " ",
            itemError: " ",
            titleError: " ",
            contentTextError: " ",
            priorityError: " "
        };
        
        if (category.trim().length === 0) {
            inputValidation.categoryError = "Category field must not be empty";
        }
        
        if (type.trim().length === 0) {
            inputValidation.typeError = "Type field must not be empty";
        }

        if (item.trim().length === 0) {
            inputValidation.itemError = "Item field must not be empty";
        }

        if (title.trim().length === 0) {
            inputValidation.titleError = "Title field must not be empty";
        }

        if (contentText.trim().length === 0) {
            inputValidation.contentTextError = "Description must not be empty";
        }
        
        if (!priority && priority === 0) {
            inputValidation.priorityError = "Please choose a priority level (1-5)";
        }

        const noErrors = obj => {
            const errors = Object.values(obj);
            for (const error of errors) {
                if (error.trim().length > 0) {
                    return false;
                }
            }
            return true;
        }
        
        if (noErrors(inputValidation) === true) {
            // I don't know what to do with category and type.

            const newTicket = {
                category: category,
                type: type,
                item: type,
                author_id: this.props.auth.user.id,
                title: title,
                content_text: contentText,
                priority: priority,
            }
            
            this.props.createTicket(newTicket, this.props.history);
        }
        this.setState({
            ...this.state,
            inputValidation: inputValidation
        })
    }

    cancelSubmision = event => {
        event.preventDefault();
        this.props.history.push("/dashboard");
    }
    
    render() {
        const {classes} = this.props;
        const {categoryError, typeError, itemError, titleError, contentTextError, priorityError} = this.state.inputValidation;

        return (
            <Card className={classes.cardSize}>
                <CardContent>
                    <Grid container direction="column" justify="center" spacing={2} className={classes.w100}>
                        <Grid item>
                            <Typography variant="h4">Submit A New Ticket:</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" alignItems="center" spacing={2}>
                                <Grid item xs={8} sm={4}>
                                    <TextField 
                                        variant="outlined"
                                        label="Category"
                                        name="category"
                                        error={categoryError.trim().length > 0 ? true : false}
                                        helperText={categoryError}
                                        required
                                        onChange={this.handleTextChange}
                                        className={classes.w100}
                                    />
                                </Grid>
                                <Grid item xs={8} sm={4}>
                                    <TextField 
                                        variant="outlined"
                                        label="Type"
                                        name="type"
                                        error={typeError.trim().length > 0 ? true : false}
                                        helperText={typeError}
                                        required
                                        onChange={this.handleTextChange}
                                        className={classes.w100}
                                    />
                                </Grid>
                                <Grid item xs={8} sm={4}>
                                    <TextField 
                                        variant="outlined"
                                        label="Item"
                                        name="item"
                                        error={itemError.trim().length > 0 ? true : false}
                                        helperText={itemError}
                                        required
                                        onChange={this.handleTextChange}
                                        className={classes.w100}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={8}>
                            <TextField 
                                variant="outlined"
                                label="Title"
                                name="title"
                                required
                                error={titleError.trim().length > 0 ? true : false}
                                helperText={titleError}
                                onChange={this.handleTextChange}
                                className={classes.w100}
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <TextField
                                variant="outlined"
                                label="Description"
                                name="contentText"
                                required
                                helperText={contentTextError}
                                error={contentTextError.trim().length > 0 ? true : false}
                                multiline
                                rows={4}
                                onChange={this.handleTextChange}
                                className={classes.w100}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" alignItems="center" spacing={4}>
                                <Grid item xs={6} sm={4}>
                                    <FormControl required error={priorityError.trim().length > 0 ? true : false} className={classes.w100}>
                                        <InputLabel id="priority">Priority</InputLabel>
                                        <Select
                                            name="priority"
                                            value={this.state.priority}
                                            onChange={this.handleSelectChange}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                        <FormHelperText>{priorityError}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" justify="flex-end" alignItems="center" spacing={4}>
                                <Grid item>
                                    <Button onClick={this.cancelSubmision}>
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={this.validateInput}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

CreateTickets.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    createTicket: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {createTicket})(withStyles(styles)(CreateTickets));