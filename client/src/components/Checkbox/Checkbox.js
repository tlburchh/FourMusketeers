import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Favorite from "@material-ui/icons/Favorite";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import PropTypes from "prop-types";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// import green from "@material-ui/core/colors/green";
import cyan from "@material-ui/core/colors/cyan";
// you can import color via this import


const styles = {
  root: {
    //   color: cyan[600],
    "&$checked": {
      color: cyan[300],
    }
  },
  checked: {}
};



class CheckboxLabels extends React.Component {
  state = {
    checkedD: false,
    checkedU: false,
    checkedH: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>

        <FormControlLabel
          control={
            <Checkbox
              icon={<ThumbUpIcon />}
              checkedIcon={<ThumbUpIcon />}
              checked={this.state.checkedU}
              onChange={this.handleChange("checkedU")}
              value="checkedU"
              classes={{
                root: classes.root,
                checked: classes.checked
              }}
            />
          }
          label="up"
        />

        <FormControlLabel
          control={
            <Checkbox
              icon={<ThumbDownIcon />}
              checkedIcon={<ThumbDownIcon />}
              checked={this.state.checkedD}
              onChange={this.handleChange("checkedD")}
              value="checkedD"
              classes={{
                root: classes.root,
                checked: classes.checked
              }}
            />
          }
          label="down"
        />

      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxLabels);

