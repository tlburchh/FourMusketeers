import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating/StarRating';
import CommentModal from '../CommentModal/CommentModal';
// import API from "../../utils/API";
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
      // wines: ""
      // description: "",
      // price: "",
      // color: "",

    };
  }
  // populateWines = () => {
  //   for (let i = 0; i <= this.props.wineData.data.length; i++){
  //     return({wines: this.props.wineData.data[i]})
  //     };
  //   }   
  //     componentDidMount() {
  //       this.populateWines();
  //     };


    
    render() {
      // console.log(this.state)
      const { classes } = this.props;
      // console.log("props");
      // console.log(this.props.wineData.data[this.props.i].name)
      // let {wines} = this.props.wineData.data[this.props.i]
      
  return (
    // <ButtonBase>
    <Paper className={`${classes.paper}`} id={this.props.isActive ? 'clickedPaperButton' : ''} onClick={() => this.props.handleCardClick(this.props.id)}>
    <Grid container spacing={16}>                  
        <Grid item xs={12} lg container style= {{ paddingBottom: '0px',
    paddingTop: '0px'}}>
        <Grid item xs={1} container style= {{ backgroundColor : `${this.props.wineData.data[this.props.i].color[1]}`, borderRadius: "5px"}}>
            {/* <Paper >
            </Paper> */}
          </Grid>
          <Grid item xs container direction="column" spacing={24}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {`${this.props.wineData.data[this.props.i].name}`}
                     </Typography>
                     <Typography gutterBottom className="truncate">{`${this.props.wineData.data[this.props.i].description}`}</Typography>
                </Grid>
                <Grid item style= {{ display: 'flex', justifyContent: 'space-between'}}>
                    <StarRating />
                  <CommentModal />
               </Grid>
              </Grid>
            <Grid item>
            <Typography variant="subtitle1">{`${this.props.wineData.data[this.props.i].price}`}}</Typography>
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
