import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createTicket, fetchCategories, fetchTypes, fetchItems, clearReducer } from "../../actions/ticketActions";

import { withStyles, Card, CardContent, Grid, TextField, InputLabel, Select, MenuItem, Button, Typography, FormControl, FormHelperText, CircularProgress } from "@material-ui/core";

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
            category_id: null,
            type_id: null,
            item_id: null,
            title: "",
            contentText: "",
            priority: null,
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
        this.handleCTIChange = this.handleCTIChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.cancelSubmision = this.cancelSubmision.bind(this);
    }

    componentDidMount = () => {
        this.props.fetchCategories();
    }

    componentWillUnmount = () => {
        this.props.clearReducer();
    }

    handleCTIChange = event => {
        event.preventDefault();

        switch(event.target.name) {
            case "category_id": {
                this.props.fetchTypes(event.target.value);
                this.setState({
                    ...this.state,
                    category_id: event.target.value,
                    type_id: null,
                    item_id: null
                });
                break;
            }
            case "type_id": {
                this.props.fetchItems(this.state.category_id, event.target.value);
                this.setState({
                    ...this.state,
                    type_id: event.target.value,
                    item_id: null
                });
                break;
            }
            default: {
                this.setState({
                    ...this.state,
                    [event.target.name]: event.target.value
                });
                break;
            }
        }
    }

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
        const {category_id, type_id, item_id, title, contentText, priority} = this.state;

        let inputValidation = {
            categoryError: " ",
            typeError: " ",
            itemError: " ",
            titleError: " ",
            contentTextError: " ",
            priorityError: " "
        };
        
        if (category_id === null) {
            inputValidation.categoryError = "Category field must not be empty";
        }
        
        if (type_id === null) {
            inputValidation.typeError = "Type field must not be empty";
        }

        if (item_id === null) {
            inputValidation.itemError = "Item field must not be empty";
        }

        if (title.trim().length === 0) {
            inputValidation.titleError = "Title field must not be empty";
        }

        if (contentText.trim().length === 0) {
            inputValidation.contentTextError = "Description must not be empty";
        }
        
        if (priority === null) {
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
            const newTicket = {
                item_id: item_id,
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
        const {classes, tickets} = this.props;
        const {categoryError, typeError, itemError, titleError, contentTextError, priorityError} = this.state.inputValidation;

        let categoriesMarkup = <MenuItem></MenuItem>;
        let typesMarkup = <MenuItem></MenuItem>;
        let itemsMarkup = <MenuItem></MenuItem>;

        if (tickets && tickets.loadingCategories === true) {
            categoriesMarkup = <CircularProgress/>
        } else if (tickets && tickets.categoriesSelection.length > 0) {
            categoriesMarkup = tickets.categoriesSelection.map(category => {
                return (
                    <MenuItem key={category.category_id} value={category.category_id}>{category.name}</MenuItem>
                );
            });
        }

        if (tickets && tickets.loadingTypes === true) {
            typesMarkup = <CircularProgress/>
        } else if (tickets) {
            typesMarkup = tickets.typesSelection.map(type => {
                return (
                    <MenuItem key={type.type_id} value={type.type_id}>{type.name}</MenuItem>
                );
            });
        }

        if (tickets && tickets.loadingItems === true) {
            itemsMarkup = <CircularProgress/>
        } else if (tickets) {
            itemsMarkup = tickets.itemsSelection.map(item => {
                return (
                    <MenuItem key={item.item_id} value={item.item_id}>{item.name}</MenuItem>
                );
            });
        }

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
                                    <FormControl required error={categoryError.trim().length > 0 ? true : false} className={classes.w100}>
                                        <InputLabel id="category">Category</InputLabel>
                                        <Select
                                            name="category_id"
                                            value={this.state.category_id}
                                            onChange={this.handleCTIChange}
                                        >
                                            {categoriesMarkup}
                                        </Select>
                                        <FormHelperText>{categoryError}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={8} sm={4}>
                                    <FormControl required error={typeError.trim().length > 0 ? true : false} disabled={this.state.category_id === null ? true : false} className={classes.w100}>
                                        <InputLabel id="type">Type</InputLabel>
                                        <Select
                                            name="type_id"
                                            value={this.state.type_id}
                                            onChange={this.handleCTIChange}
                                        >
                                            {typesMarkup}
                                        </Select>
                                        <FormHelperText>{typeError}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={8} sm={4}>
                                    <FormControl required error={itemError.trim().length > 0 ? true : false} disabled={this.state.type_id === null ? true : false} className={classes.w100}>
                                        <InputLabel id="item">Item</InputLabel>
                                        <Select
                                            name="item_id"
                                            value={this.state.item_id}
                                            onChange={this.handleCTIChange}
                                        >
                                            {itemsMarkup}
                                        </Select>
                                        <FormHelperText>{itemError}</FormHelperText>
                                    </FormControl>
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
                                        <InputLabel>Priority</InputLabel>
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
    createTicket: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    fetchTypes: PropTypes.func.isRequired,
    fetchItems: PropTypes.func.isRequired,
    clearReducer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    tickets: state.tickets,
    errors: state.errors
});

export default connect(mapStateToProps, {createTicket, fetchCategories, fetchTypes, fetchItems, clearReducer})(withStyles(styles)(CreateTickets));