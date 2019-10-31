import React, { Component } from "react";

import { AppBar, Toolbar } from "@material-ui/core";

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar />
      </AppBar>
    );
  }
}

export default Navbar;
