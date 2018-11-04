import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function WineSubmit(props) {
  const { classes } = props;
  return (
    <div>
      <Button color="primary" variant="outlined" size="large" className={classes.button}>
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
    </div>
  );
}

WineSubmit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineSubmit);