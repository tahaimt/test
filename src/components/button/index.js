import React,  { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing(0.5)
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  }
});

class PrimeButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <span className={classes.wrapper}>
          <Button 
            onClick={this.props.onClick}
            variant={this.props.variant}
            color={this.props.color}
            className={this.props.className}
            style={this.props.style}
            disabled={this.props.disabled || this.props.loading}
          >
            { this.props.label }
          </Button>
          {this.props.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </span>
      </React.Fragment>
    )
  }
}

PrimeButton.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default withStyles(styles)(PrimeButton);
