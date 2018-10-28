import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating/StarRating';
import CommentModal from '../CommentModal/CommentModal';
import API from "../../utils/API";
import './WineCard.css'
// import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },

});

class WineCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      color: "",

    };
  }
  componentDidMount() {
    this.loadWines();
  }
  
  loadWines = () => {
    API.getCurrentWines()
    .then(res =>
      this.setState({ name: res.name, description: res.description, price: res.price, color: res.color })
      )
      .catch(err => console.log(err));
    };
    
    handleWineSelection = () => {
      console.log('Clicked div');
      this.setState({ })
    }
    
    render() {
      console.log("state" + this.state)
      const { classes } = this.props;
  return (
    // <ButtonBase>
    <Paper className={`${classes.paper}`} id={this.props.isActive ? 'clickedPaperButton' : ''} onClick={() => this.props.handleCardClick(this.props.id)}>
    <Grid container spacing={16}>                  
        <Grid item xs={12} lg container style= {{ paddingBottom: '0px',
    paddingTop: '0px'}}>
        <Grid item xs={1} container style= {{ backgroundColor : 'this.state.color', borderRadius: "5px"}}>
            {/* <Paper >
            </Paper> */}
          </Grid>
          <Grid item xs container direction="column" spacing={24}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {this.state.name}
                     </Typography>
                     <Typography gutterBottom>{this.state.description}</Typography>
                </Grid>
                <Grid item style= {{ display: 'flex', justifyContent: 'space-between'}}>
                    <StarRating />
                  <CommentModal />
               </Grid>
              </Grid>
            <Grid item>
            <Typography variant="subtitle1">{this.state.price}</Typography>
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
