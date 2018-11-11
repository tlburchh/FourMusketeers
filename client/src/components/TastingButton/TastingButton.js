import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LocalBarIcon from '@material-ui/icons/LocalBar';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

function TastingButton(props) {
  const { classes } = props;
  return (
        <Button 
        variant="contained" 
        style={{ backgroundColor: 'rgba(119, 158, 209)', 
        margin: '8px 0px 8px 0px'}}
        size="large" 
        className={classes.button}
        href="/tasting">
        Tasting Page
        <LocalBarIcon className={classes.rightIcon} />
        </Button>
  );
}

TastingButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TastingButton);
