import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function EditButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" id='#' className={classes.button}>
        Edit
      </Button>
    </div>
  );
}

EditButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditButton);