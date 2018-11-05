import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EditButton from '../EditButton/EditButton';
// import API from "../../utils/API";
import './WineCardAdmin.css'
// import { Draggable, Droppable } from 'react-drag-and-drop'
// import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    padding: theme.spacing.unit * 2,
  },

});

class WineCardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }


  formatPrice = price => {
    const dotPos = price.length - 2;
    return price.substring(0, dotPos) + "." + price.substring(dotPos, price.length);
  }


  render() {

  
    const wine = this.props.wine;
    
    return (
      
      
        <Paper className={`${this.props.paper}`}>
          <Grid container spacing={16}>
            <Grid item xs={12} lg container style={{
              paddingBottom: '0px',
              paddingTop: '0px',
              // maxWidth: '85%'
            }}>
              <Grid item xs={1} container style={{ backgroundColor: `${wine.color[1]}`, borderRadius: "4px" }}>
                {/* <Paper >
              </Paper> */}
              </Grid>
              <Grid item xs container style={{maxWidth: '85%'}} direction="column" spacing={24}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {`${wine.name}`}
                  </Typography>
                  <Typography gutterBottom className="truncate">{`${wine.description}`}</Typography>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <EditButton />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" id="winePrice">{`$ ${this.formatPrice(wine.priceRegular)}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      
    );
  }
}

WineCardAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineCardAdmin);
