
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
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});


class Tasting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selected: [],
      finished: false
    };
  }

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
        console.log("response data");
        console.log(res.data);
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err));
  };

  startTasting = () => {
    console.log("Begin tasting");
    this.setState({
      finished: true
    });
  }

  handleWineSelection = () => {
    console.log('Clicked div');
    this.setState({})
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
              this.state.selected.length > 7 && !this.state.finished && <div id="num-selected" className="done" onClick={this.startTasting}>Start Tasting!</div>
            }
            {/* End hero unit */}
  
            <Grid xs={12}  
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
            >
              {this.state.data.map((wineData, i) => (
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
                      />
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom >
            Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            <a href="https://www.starrlightmead.com">Check Us Out!</a>
          </Typography>
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