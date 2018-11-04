import React, { Component } from 'react';
import WineName from './WineName';
import WinePrice from './WinePrice';
import WineColor from './WineColor';
import WineDescription from './WineDescription';
import WineKeywords from './WineKeywords';
import WineAddRemoveSwitch from './WineAddRemoveSwitch';
// import WineSubmit from './WineSubmit';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import SaveIcon from '@material-ui/icons/Save';

import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

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

class AdminDataInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:this.props.name,
      price: this.props.price,
      color:this.props.color,
      description:this.props.description,
      keywords: this.props.keywords,
      wineswitch: this.props.switch,

    };
    console.log(this.state)
  }
  render() {
    const { classes } = this.props;
    return (

      <div>
      <WineName />
      <WinePrice />
      <WineColor />
      <WineDescription />
      <WineKeywords />
      <Grid style={{display: 'flex', justifyContent: 'space-around'}}>
      <WineAddRemoveSwitch />
      <div>
        <Button color="primary" variant="outlined" size="large" className={classes.button}>
          <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
          Save

        </Button>
      </div>


  

      </Grid>


      </div>
    )
  }
}

AdminDataInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDataInput);