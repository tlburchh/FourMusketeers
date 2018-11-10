import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import API from '../../../utils/API';

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
    choices: ["Getting colors..."],
    currColor: ""
  };

  componentDidMount() {
    API.getColors().then(resp => {
      console.log(`Got colors: ${resp.data}`, resp.data);
      this.setState({
        choices: [...resp.data.colors]
      }, () => {
        console.log("Set the colors in state");
      });
    }).catch((err) => {
      console.log("Error getting colors");
    });
  }


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
            value={this.props.color}
            onChange={this.props.handleColorChange}
            inputProps={{
              name: 'color',
              id: 'color-simple',
            }}
          >
            {
              this.state.choices.map(color => (
                <MenuItem value={color}>{color}</MenuItem>

              ))
            }
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