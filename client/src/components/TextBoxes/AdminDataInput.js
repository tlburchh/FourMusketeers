import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import ClearAll from '@material-ui/icons/ClearAll';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Switch from '@material-ui/core/Switch';
import WineColor from './WineColor/WineColor'
import WineAvailable from './WineAvailable/WineAvailable'
import API from "../../utils/API";


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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      color: '',
      description: '',
      keywords: [],
      available: true,
      id: ''
    };
  }

  clearInputs = () => {
    this.setState({
      name: '',
      price: '',
      color: '',
      description: '',
      keywords: [],
      available: true,
      id: ''
    });
  }

  handleSave = () => {
    console.log("Saving / updating wine.");
    API.addNewWine(this.state).then(res => {
      console.log(res);
      if (res.status === 200 && res.data.message === "Added new wine.") {
        alert(`${res.data.resp.name} saved successfully!`);
        this.props.getWines();
      }
      else if (res.status === 200 && res.data.message === "Updated wine.") {
        alert(`${res.data.resp.name} updated successfully!`);
        this.props.getWines();
      }
      else {
        alert("Something went wrong. Please contact your friendly neighborhood sysadmin.");
      }
    }).catch(err => {
      console.log(err);
    });
  };


  // name and price
  handleChange = name => event => {
    console.log(name, event.target.value);
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
    });
  }

  componentDidUpdate() {
    if (this.props.wine.name && (this.state.name !== this.props.wine.name)) {
      const w = this.props.wine;
      this.setState({
        name: w.name,
        price: w.priceRegular,
        color: w.color.color,
        description: w.description,
        keywords: w.keywords,
        available: w.isAvailable,
        id: w._id
      });
    }
  }


  render() {
    const { classes } = this.props;

    return (

      <div>

        {/* Wine Name */}

        <form className={classes.container} noValidate autoComplete="off">

          <input
            // autoFocus
            id="standard-name"
            label='Wine Name'
            placeholder="Wine Name"
            className={classes.textField}
            value={this.props.wine.name ? this.props.wine.name : this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            style={{ width: "100%" }}
          ></input>
        </form>
        {/* Price */}
        <form className={classes.container} noValidate autoComplete="off">

          <input
            // autoFocus

            id="standard-name"
            label="Wine Price"
            placeholder="Wine Price"
            className={classes.textField}
            value={this.props.wine.priceRegular ? this.props.wine.priceRegular : this.state.price}
            onChange={this.handleChange('price')}
            margin="normal"
            style={{ marginTop: '25px', width: '100%' }}
          />
        </form>

        <WineColor
          // If receiving props, use them (edit button clicked) else use this component's state
          color={this.props.wine.color ? this.props.wine.color.color : this.state.color}
          handleColorChange={this.handleColorChange}
        />

        <form className={classes.container} noValidate autoComplete="off">

          <textarea
            rows="2"
            cols="20"
            id="standard-textarea"
            label="Description"
            placeholder="Description"
            multiline
            value={this.props.wine.description ? this.props.wine.description : this.state.description}
            onChange={this.handleChange('description')}
            className={classes.textField}
            margin="normal"
            style={{ height: '120px', width: '100%' }}
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
              available={this.props.wine.isAvailable ? this.props.wine.isAvailable : this.state.available}
              handleAvailableChange={this.handleAvailableChange}
            />


            {/* Save Button  */}
            <div>
              <Button onClick={this.handleSave} color="primary" variant="outlined" size="large" className={classes.button}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save
            </Button>
              <Button onClick={this.clearInputs} color="primary" variant="outlined" size="large" className={classes.button}>
                <ClearAll className={classNames(classes.leftIcon, classes.iconSmall)} />
                Clear
              </Button>
              <Button onClick={this.props.saveOrder} color="primary" variant="outlined" size="large" className={classes.button}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Order
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
