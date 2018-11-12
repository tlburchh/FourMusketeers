import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import API from '../../../utils/API';
// import { colors } from '@material-ui/core';

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
    if (this.state.choices.length === 1) {
      API.getColors().then(resp => {
        let colorsArray = [];
        resp.data.colors.forEach(color => {
          colorsArray.push(color.color);
        });
        this.setState({
          choices: colorsArray
        }, () => {
        });
      }).catch((err) => {
        console.log("Error getting colors");
      });
    }
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
            style={{ background: this.props.color }}
            onChange={this.props.handleColorChange}
            inputProps={{
              name: 'color',
              id: 'color-simple',
            }}
          >
            {
              this.state.choices.map(color => (
                <MenuItem value={color} style={{ background: color }}></MenuItem>

              ))
            }
          </Select>
        </FormControl>
      </form >
    );
  }
}
WineColor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineColor);