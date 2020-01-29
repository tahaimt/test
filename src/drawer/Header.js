import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import withStyles from "@material-ui/styles/withStyles";
import { Grid, Typography, Toolbar, AppBar } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "white"
  },
  inline: {
    display: "inline"
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.8em"
    }
  }
});

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
      <AppBar color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={6} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link to="/" className={classes.link}>
                    <span className={classes.tagline}>Prime Number App</span>
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Header));
