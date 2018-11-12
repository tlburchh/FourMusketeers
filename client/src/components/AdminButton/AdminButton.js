import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

function AdminButton(props) {
  const { classes } = props;
  return (
        <Button 
        variant="contained" 
        style={{ backgroundColor: 'rgba(119, 158, 209)',
        }}
        size="small" 
        className={classes.button}
        href="/">
        Admin Page
        <PersonIcon className={classes.rightIcon} />
        </Button>
  );
}

AdminButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminButton);
