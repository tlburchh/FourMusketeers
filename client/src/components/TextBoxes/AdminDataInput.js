import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import WineColor from './WineColor/WineColor'
import WineAvailable from './WineAvailable/WineAvailable'


const styles = theme => ({
  // save button
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
  // name, price, and description input
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },

  // color
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
  //Keywords

  // root: {
  //   flexGrow: 1,
  // },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class AdminDataInput extends Component {


  state = {
    name: '',
    price: '',
    color: '',
    description: '',
    keywords: [],
    available: true
  };

  // name and price
  handleChange = name => event => {
    this.setState({

      [name]: event.target.value

    });
  };

  handleColorChange = event => {
    this.setState({
      color: event.target.value
    })
  }

  handleAvailableChange = event => {
    this.setState({
      available: event.target.value
    })
  }


  render() {
    const { classes } = this.props;
    return (

      <div>

        {/* Wine Name */}
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Wine Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </form>
        {/* Price */}
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Wine Price"
            className={classes.textField}
            value={this.state.price}
            onChange={this.handleChange('price')}
            margin="normal"
          />
        </form>
        {/* Color    WORK IN PRORESS   */}

        <WineColor
          color={this.state.color}
          handleColorChange={this.handleColorChange}
        />

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-textarea"
            label="Description"
            placeholder="Placeholder"
            multiline
            onChange={this.handleChange('description')}
            className={classes.textField}
            margin="normal"
          />
        </form>
        {/* Keywords */}
        {/* <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Keywords populate here for selection</Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
      </div> */}

        <Grid style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* Wine Available */}


          <Grid style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* Wine Available */}


            <WineAvailable
              available={this.state.available}
              handleAvailableChange={this.handleAvailableChange}
            />


            {/* Save Button  */}
            <div>
              <Button color="primary" variant="outlined" size="large" className={classes.button}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save

            </Button>
            </div>
          </Grid>
        </Grid>
      </div>


    )
  }
}

AdminDataInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDataInput);
