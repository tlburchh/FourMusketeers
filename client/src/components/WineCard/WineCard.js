import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating/StarRating';
import CommentModal from '../CommentModal/CommentModal';
// import API from "../../utils/API";
import './WineCard.css';
// import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  }
});

class WineCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: "inactive"
    };
  }

  formatPrice = price => {
    const dotPos = price.length - 2;
    return price.substring(0, dotPos) + "." + price.substring(dotPos, price.length);
  }

  toggleActive = (numClicked, event) => {
    // If you click a star, abort
    if (event.target.type === "radio") {
      return;
    }
    else if (this.state.isActive === "inactive") {
      if (numClicked === 8) {
        return;
      }
      else {
        this.setState({
          isActive: "active"
        });
      }
    }
    else {
      this.setState({
        isActive: 'inactive'
      });
    }
  }

  componentDidMount() {
    this.setState({
      numClicked: this.props.numClicked
    });
  }


  render() {

    const wine = this.props.wine;

    return (
      <Paper className={this.state.isActive} onClick={event => {
        this.props.handleCardClick(this.props.id, event);
        this.toggleActive(this.props.numClicked, event);
      }}>

        <Grid container spacing={16}>
          <Grid item xs={12} lg container style={{
            paddingBottom: '0px',
            paddingTop: '0px'
          }}>
            <Grid item xs={1} container style={{ backgroundColor: `${wine.color[1]}`, borderRadius: "5px" }}>
              {/* <Paper >
            </Paper> */}
            </Grid>
            <Grid item xs container direction="column" spacing={24}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {`${wine.name}`}
                </Typography>
                <Typography gutterBottom className="truncate">{`${wine.description}`}</Typography>
              </Grid>
              <Grid item style={{ display: 'flex', justifyContent: 'space-between' }}>
                <StarRating
                  id={wine.name}
                />
                <CommentModal />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{`$ ${this.formatPrice(wine.priceRegular)}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      // </ButtonBase>
    );
  }
}

WineCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineCard);
