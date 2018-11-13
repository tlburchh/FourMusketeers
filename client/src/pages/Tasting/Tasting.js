
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import WineCard from '../../components/WineCard';
import API from "../../utils/API";
import './Tasting.css';
import Button from '@material-ui/core/Button';
import ConfirmDialog from '../../components/ConfirmDialog';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  footerBrand: {
    color: theme.palette.text.secondary
  },
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});


class Tasting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      data: [],
      selected: [],
      finished: false,
      starRatings: Array(8).fill(0),
      keywordRatings: Array(8).fill([]),
      winesRated: [],
      submitButtonText: "Submit Ratings!",
      ratingDone: false,
      confirmDialog: false
    };
  }

  // User clicks submit rating button
  submitRatedWines = () => {
    // We have an array of ratings (only the ones actually rated)
    let ratingArr = [];
    // for each one rated, push the corresponding index in an object into the array
    for (let i = 0; i < this.state.winesRated.length; i++) {
      const wineRating = {
        numericalRating: this.state.starRatings[i],
        keyWordRating: this.state.keywordRatings[i],
        user: this.state.user._id || null,
        wine: this.state.winesRated[i]
      };
      ratingArr.push(wineRating);
    }
    API.submitRating({ ratings: ratingArr, selected: this.state.selected }).then(resp => {
      this.buttonSubmitDone();
      this.afterSubmit();
      // Can't access props inside the setTimeout method ->
      const logout = this.props.logout;
      setTimeout(function () {
        logout();
      }, 5000);
    }).catch(err => {
      console.log("Error submitting wine rating...");
    });
  }
  // Helper functions for button styling and user feedback when submitting rating (above function)
  confirmSubmitRating = () => {
    this.setState({
      confirmDialog: true
    });
  }
  buttonSubmit = () => {
    this.setState({
      submitButtonText: "Submitting..."
    });
  }
  buttonSubmitDone = () => {
    this.setState({
      submitButtonText: "Done!"
    });
  }
  afterSubmit = () => {
    this.setState({
      ratingDone: true
    });
  }

  // Passed down to confirm dialog to open and close:
  handleConfirmOpen = () => {
    this.setState({ confirmDialog: true });
  };

  handleConfirmClose = event => {
    // convert bool string to true boolean
    const yn = (event.target.innerHTML === 'Yes');
    if (yn) {
      this.setState({
        confirmDialog: false
      });
      this.submitRatedWines();
    }
    else {
      this.setState({
        confirmDialog: false
      });
    }
  };

  handleCardClick = (cardId, event) => {
    // If tasting has started, abort
    if (this.state.finished) {
      return;
    }
    // Check the selected array for the card's id
    else if (this.searchSelected(cardId) === -1) {
      // Check if we're at 8 already...
      if (this.state.selected.length === 8) {
        // Yes, so cancel adding more
        return false;
      }
      else {
        // No, push it in
        this.addIdToSelected(cardId);
      }
    }
    else {
      // Found, remove it
      this.removeIdFromSelected(cardId);
    }

  }

  // Search the selected array for an instance of the input id
  searchSelected = id => {
    return this.state.selected.indexOf(id);
  }

  // Remove the entry of a given id from the selected array
  removeIdFromSelected = id => {
    this.setState({
      selected: this.state.selected.filter(i => {
        return i !== id
      })
    });
  }

  // Add a cards id to the selected array
  addIdToSelected = id => {
    if (this.state.selected.length === 8) {
      return false;
    }
    else {
      this.setState({
        selected: [...this.state.selected, id]
      });
    }
  }

  componentDidMount() {
    this.loadWines();
  }

  loadWines = () => {
    API.getCurrentWines()
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err));
  };

  startTasting = () => {
    this.setState({
      finished: true
    });
  }

  handleWineSelection = () => {
    this.setState({})
  }

  // This gets passed down to the comment popover to pull up the array of true/false (keywords good/bad)
  keywordGetter = (keyWordArr, wineId) => {
    //Same as for stars, see if it's been put in state ? update : createNew
    if (this.findWineIdInState(wineId) === -1) {
      const nextEmpty = this.state.winesRated.length;
      this.putWineIdInState(wineId, nextEmpty);
      this.putKwRatingInState(keyWordArr, nextEmpty);
    }
    else if (this.findWineIdInState(wineId) !== -1) {
      const ind = this.findWineIdInState(wineId);
      this.putWineIdInState(wineId, ind);
      this.putKwRatingInState(keyWordArr, ind);
    }
    else {
      console.log("Something world breaking happened. You were too drunk when you coded this.");
    }
  }

  // This gets passed all the way down to <StarRating />
  // It fires when a star is clicked and sets the appropriate state here
  starStateGetter = (rating, wineId) => {
    // We need to find if this wineId has been set in state before
    if (this.findWineIdInState(wineId) === -1) {
      const nextEmpty = this.state.winesRated.length;
      // If not, put it and the rating at next available index
      this.putWineIdInState(wineId, nextEmpty);
      this.putStarRatingInState(rating, nextEmpty);
    }
    else if (this.findWineIdInState(wineId) !== -1) {
      // The rating was already set, just update the exisiting
      const ind = this.findWineIdInState(wineId);
      this.putWineIdInState(wineId, ind);
      this.putStarRatingInState(rating, ind);
    }
    else {
      console.log("Something world breaking just happened.");
    }

  }

  // == Helper functions for starStateGetter == //

  // Look in winesRated state for a wine id.
  // Return the index or -1 if not found
  findWineIdInState = id => {
    let found = this.state.winesRated.find((wineId, i) => {
      return wineId === id;
    });
    if (!found) {
      return -1;
    }
    else {
      return this.state.winesRated.indexOf(found);
    }
  }
  // Put a wine ID into state and return index where it is
  putWineIdInState = (id, index) => {
    const tmpArr = [...this.state.winesRated.slice(0, index), id, ...this.state.winesRated.slice(index + 1)]
    this.setState({
      winesRated: tmpArr
    }, function () {
      return this.findWineIdInState(id);
    });
  }

  // Put the star rating into state
  putStarRatingInState = (rating, index) => {
    const tmpArr = [...this.state.starRatings.slice(0, index), rating, ...this.state.starRatings.slice(index + 1)];
    this.setState({
      starRatings: tmpArr
    }, function () {
      return "Put star rating in state.";
    });
  }

  // put the keyword array into a slot in the state array
  putKwRatingInState = (kws, index) => {
    const tmpArr = [...this.state.keywordRatings.slice(0, index), kws, ...this.state.keywordRatings.slice(index + 1)];
    this.setState({
      keywordRatings: tmpArr
    }, () => {
      return "Put kw ratings in state";
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* Only display the wine selected number box before the tasting has started */}
            {
              this.state.selected.length < 8 && !this.state.finished && <div id="num-selected" className="not-done">Meads selected: {this.state.selected.length}</div>
            }
            {
              this.state.selected.length > 7 && !this.state.finished && <Button id="num-selected" className="done" onClick={this.startTasting}><b>Start Tasting!</b></Button>
            }
            {/* End hero unit */}


            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <ConfirmDialog
                openState={this.state.confirmDialog}
                open={this.handleConfirmOpen}
                close={this.handleConfirmClose}
              />

              {!this.state.ratingDone && this.state.data.map((wineData, i) => (
                <div key={i} className={classes.root}>
                  <Grid >
                    <Grid >
                      <WineCard
                        wine={wineData}
                        key={i}
                        id={wineData._id}
                        handleCardClick={this.handleCardClick}
                        numClicked={this.state.selected.length}
                        finished={this.state.finished}
                        stars={this.state.starRatings}
                        starStateGetter={this.starStateGetter}
                        keywords={this.state.keywordRatings}
                        keywordGetter={this.keywordGetter}
                      />
                    </Grid>
                  </Grid>
                </div>
              ))}
              {
                this.state.ratingDone && <div className="post-rating-message">
                  <h3>Thank you for visiting! We hope you enjoyed yourself!</h3>
                </div>
              }
              {this.state.finished && !this.state.ratingDone && (
                <Button style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'fixed',
                  bottom: 0,
                  width: '90%'
                }}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.confirmSubmitRating}>
                  {this.state.submitButtonText}
                </Button>
              )}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer
          style={{
            background: '#6789c400',
            height: '30px',
            paddingBottom: '65px'
          }}
          className={classes.footer}
        >
          {/* Wrapped this Typography with a Div cause React was complaining about nested <p>s */}
          <div align="left" className="footer-brand" >
            <Typography>
              <b>Silenus</b> <br />
              by <br />
              Amalgam Innovations 2018
            </Typography>
          </div>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Tasting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tasting);