import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class WineKeywords extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  } 

render() {
 const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>         
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>comments populate here for selection</Paper>
          </Grid>
          <Grid item xs>          
          </Grid>
        </Grid>
      </div>
    );
  }
}

WineKeywords.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineKeywords);
