import React,  { Component } from 'react';

import PropTypes from 'prop-types';

import withStyles from '@material-ui/styles/withStyles';
import { CssBaseline, Chip } from '@material-ui/core';

const styles = theme => ({
    wrapper: {
      margin: theme.spacing(0.5),
      position: 'relative',
    }
});

export class PrimeItem extends Component { 
    render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <span className={classes.wrapper}>
          <Chip color="default" label={this.props.number}></Chip>
        </span>
      </React.Fragment>
    )
  }
}

PrimeItem.propTypes = {
  number: PropTypes.number
};

export default withStyles(styles)(PrimeItem);