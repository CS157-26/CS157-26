import React, { Component } from 'react';
import axios from "axios";

import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@material-ui/core";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false
    }

    this.rows = [];
  }

  componentDidMount = () => {
    if (this.state.loaded === false) {
      axios.get("/api/demo/")
        .then(rows => {
          this.rows = rows.data;
          this.setState({ loaded: true });
        });
    }
  };

  render() {
    if (this.state.loaded === true) {
      let rowsMarkup = this.rows.map(row => {
        return <TableRow>
          <TableCell>{row.firstname}</TableCell>
          <TableCell>{row.lastname}</TableCell>
          <TableCell>{row.major}</TableCell>
          <TableCell>{row.year}</TableCell>
        </TableRow>
      });

      return (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Major</TableCell>
                <TableCell>Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { rowsMarkup }
            </TableBody>
          </Table>
        </Paper>
      );
    } else {
      return <div/>;
    }
  }
}

export default App;
