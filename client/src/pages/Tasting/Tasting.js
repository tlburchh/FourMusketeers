
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
      selected: []
    };
  }

  handleCardClick = cardId => {
    // console.log(cardId);
    // Check the selected array for the card's id
    if (this.searchSelected(cardId) === -1) {
      // Not found, add it
      this.addIdToSelected(cardId);
    }
    else {
      // Found, remove it
      this.removeIdFromSelected(cardId);
    }


    // if (cardId === this.state.activeCard) {
    //   this.setState({ activeCard: null })
    // } else {
    //   this.setState({ activeCard: cardId })

    // }
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
    this.setState({
      selected: [...this.state.selected, id]
    });
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



  handleWineSelection = () => {
    console.log('Clicked div');
    this.setState({})
  }

  render() {
    const { classes } = this.props;
    // const { cards } = this.state;
    // const { data } = this.state;
    // console.log(`Selected: ${this.state.selected}`);
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
          {
            this.state.selected.length < 8 &&  <div id="num-selected" className="not-done">Meads selected: {this.state.selected.length}</div>
          }
          {
            this.state.selected.length > 7 && <div id="num-selected" className="done">Done!</div>
          }
            {/* End hero unit */}
            <Grid container spacing={40}>
              {this.state.data.map((wineData, i) => (
                <div key={i} className={classes.root}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <WineCard wine={wineData} i={i} id={wineData._id} handleCardClick={this.handleCardClick} />
                      {/* change index to card.id */}
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
            Something here to give the footer a purpose!
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