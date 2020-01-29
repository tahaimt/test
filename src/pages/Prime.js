import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import withStyles from '@material-ui/styles/withStyles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';
import MuiAlert from '@material-ui/lab/Alert';
import { CssBaseline, Paper, Grid, TextField, Typography } from "@material-ui/core";

import Header from '../drawer/Header';
import CustomButton from '../components/button';
import PrimeItem from '../components/primeItem';

import { getPrimeNumbers, reset } from '../store/actions/prime';

const customTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
  }
});

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    textAlign: 'right'
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 50,
    paddingTop: 50
  },
  grid: {
    width: 1200,
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(0.5)
  },
  responseHeader: {
    marginBottom: theme.spacing(3)
  }
});

class Prime extends Component {

  constructor (props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  handleOnChange = (event) => {
    this.setState({number: event.target.value});
  }

  handleOnSubmit = () => {
    this.props.getPrimeNumbers(this.state.number);
  }

  handleOnClear = () => {
    this.setState({
      number: 0
    })
    this.props.reset();
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header currentPath={currentPath} />
        
        <MuiThemeProvider theme={customTheme}>
          <div className={classes.root}>
            <Grid container justify="center" >
              <Grid alignItems="center" justify="center" container className={classes.grid}>
                <Grid item xs={12} md={12} sm={12}>
                  <Paper className={classes.paper}>
                    <div className={classes.blockCenter}>
                      <TextField
                        type="number"
                        label="Prime Numbers until"
                        inputProps={{style: { textAlign: 'right' }}}
                        className={classes.textField}
                        margin="normal"
                        value={this.state.number}
                        onChange={this.handleOnChange}
                        onKeyPress={(event) => { 
                          if (event.key === 'Enter') {
                            this.handleOnSubmit(event);
                          }}
                        }
                      />
                    </div>
                    <div className={classes.blockCenter}>
                      <CustomButton 
                        variant="contained" 
                        color="default" 
                        className={classes.button} 
                        onClick={this.handleOnClear} 
                        label="Clear"
                        disabled={this.props.isLoading}
                      />
                      <CustomButton 
                        variant="contained" 
                        color={this.props.error ? 'secondary': 'primary'} 
                        className={classes.button} 
                        onClick={this.handleOnSubmit} 
                        label="Request"
                        loading={this.props.isLoading}
                        disabled={!this.state.number}
                      />
                    </div>
                    {
                      this.props.error ?
                        !this.props.errorMessage ?
                        <>
                          <MuiAlert elevation={3} variant="filled" severity="warning">An error occurred. Perhaps check if the Express api is running!</MuiAlert>
                          <br />
                          <MuiAlert elevation={3} variant="filled" severity="info">If Express api is not running, open another shell on the root directory and execute 'npm start'</MuiAlert>
                        </> 
                        :
                        <>
                          <MuiAlert elevation={3} variant="filled" severity="warning">{ this.props.errorMessage }</MuiAlert>
                          <br />
                          <MuiAlert elevation={3} variant="filled" severity="info">If Express api is not running, open another shell on the root directory and execute 'npm start'</MuiAlert>
                        </>
                      :
                      <>
                      </>
                    }
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </div>
          {
            !this.props.error && this.props.response && typeof this.props.response === 'object' && this.props.response.length > 0 ?
              <div>
                <Grid container justify="center" className={classes.responseHeader}>
                  <Typography variant="h3" color="primary" noWrap>Median of all prime numbers under { this.props.request }</Typography>
                </Grid>
                  
                <Grid container justify="center" >
                  <br />
                  {
                    this.props.response.map(prime => <PrimeItem key={prime} number={prime} />)
                  }
                </Grid>
              </div>
            :
            this.props.request && !this.props.isLoading && !this.props.error ? <>
              <Grid container justify="center" className={classes.responseHeader}>
                <Typography variant="h3" color="primary" noWrap>There are no prime numbers under { this.props.request }</Typography>
              </Grid>
            </> : 
            <></>
          }
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    request: state.request,
    response: state.response,
    isLoading: state.isLoading,
    error: state.error,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, { getPrimeNumbers, reset })(withRouter(withStyles(styles)(Prime)));
