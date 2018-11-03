import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import WineCardAdmin from '../../components/WineCardAdmin/WineCardAdmin';
import { Draggable, Droppable } from 'react-drag-and-drop';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class AdminWineEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }



  handleCardClick = (cardId) => {
    if (cardId === this.state.activeCard) {
      this.setState({ activeCard: null })
    } else {
      this.setState({ activeCard: cardId })

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

  handleWineSelection = () => {
    console.log('Clicked div');
    this.setState({})
  }
  render() {


    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Wine Data Input</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Wine Card
              {this.state.data.map((wineData, i) => (
                <div key={i} className={classes.root}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>

                      <WineCardAdmin wine={wineData} i={i} id={wineData._id} handleCardClick={this.handleCardClick} isActive={this.state.activeCard === wineData._id} />
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

};

AdminWineEdit.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(AdminWineEdit);