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

class WineColor extends React.Component {
    state = {
      color: '',
    };
  
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="color-simple">Color</InputLabel>
            <Select
              value={this.state.color}
              onChange={this.handleChange}
              inputProps={{
                name: 'color',
                id: 'color-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'green'}>Green</MenuItem>
              <MenuItem value={'red'}>Red</MenuItem>
              <MenuItem value={'blue'}>Blue</MenuItem>
            </Select>
          </FormControl>
      </form>
      );
    }
  }
WineColor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineColor);