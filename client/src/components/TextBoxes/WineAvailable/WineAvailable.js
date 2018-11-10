import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class WineAvailable extends React.Component {

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="color-simple">Availability</InputLabel>
          <Select
            value={this.props.available}
            onChange={this.props.handleAvailableChange}
            inputProps={{
              name: 'available',
              id: 'available-simple',
            }}
          >
            <MenuItem value={false}>Not Available</MenuItem>
            <MenuItem value={true}>Available</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}
WineAvailable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineAvailable);