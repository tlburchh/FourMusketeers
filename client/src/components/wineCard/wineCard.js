import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating/StarRating';
// import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class WineCard extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

    render() {
      const { classes } = this.props;
  return (
    // <ButtonBase>
    <Paper className={classes.paper}>
    <Grid container spacing={16}>                  
        <Grid item xs={12} lg container>
        <Grid item xs={1} container style= {{ backgroundColor : 'yellow' }}>
            <Paper >
            </Paper>
          </Grid>
          <Grid item xs container direction="column" spacing={24}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Standard license
                     </Typography>
                     <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                </Grid>
                <Grid item>
                    <StarRating />
                  <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
               </Grid>
              </Grid>
            <Grid item>
            <Typography variant="subtitle1">$18.00</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    // </ButtonBase>
  );
  }
}

WineCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineCard);
