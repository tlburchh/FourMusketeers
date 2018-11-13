import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating/StarRating';
import CommentPopover from '../CommentPopover/CommentPopover';
// import API from "../../utils/API";
import './WineCard.css';
// import ButtonBase from '@material-ui/core/ButtonBase';

const styles = createMuiTheme({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: "2rem",
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
    // If the tasting has started, abort
    if (this.props.finished) {
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
    const color = wine.color.color;

    return (
      // If the finished prop comes down from Tasting and this card is inactive, hide it.
      <Paper className={`${this.state.isActive} ${this.props.finished && this.state.isActive === 'inactive' ? 'hidden' : ''}`} onClick={event => {
        this.props.handleCardClick(this.props.id, event);
        this.toggleActive(this.props.numClicked, event);
      }}>

        <Grid container spacing={16}>
          <Grid item xs={12} lg container style={{
            paddingBottom: '0px',
            paddingTop: '0px',
          }}>
            <Grid item xs={1} container style={{ backgroundColor: `${color}`, borderRadius: "4px", marginRight: '5px' }}>
            </Grid>
            <Grid item xs container style={{ maxWidth: '85%' }} direction="column" spacing={24}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {`${wine.name}`}
                </Typography>
                <Typography
                  gutterBottom
                  //Commented out truncate css. Can be added back at another time
                  // if the description is longer than 180, add the truncate class
                  className={wine.description.length > 180 ? 'truncate desc-text' : 'desc-text'}
                >
                  {wine.description}
                </Typography>
              </Grid>
              <Grid item style={{ display: 'flex', justifyContent: 'space-between' }}>
                {
                  // Only display the stars and comments button when the user has finalized their 8 choices and clicked start
                  this.props.finished &&
                  <React.Fragment>
                    <StarRating
                      id={wine.name}
                      stars={this.props.stars}
                      identifier={this.props.id}
                      starStateGetter={this.props.starStateGetter}
                    />
                    <CommentPopover
                      keys={wine.keywords}
                      identifier={this.props.id}
                      keywords={this.props.keywords}
                      keywordGetter={this.props.keywordGetter}
                    />
                  </React.Fragment>
                }
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{`$${wine.priceRegular}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

WineCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineCard);
