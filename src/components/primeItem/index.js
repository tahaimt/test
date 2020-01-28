import React,  { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const styles = theme => ({
    wrapper: {
      margin: theme.spacing(0.5),
      position: 'relative',
    }
});

class PrimeItem extends Component { 
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