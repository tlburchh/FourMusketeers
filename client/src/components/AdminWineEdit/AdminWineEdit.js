import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import EditButton from "../EditButton/EditButton";
import Button from '@material-ui/core/Button';
import AdminDataInput from "../TextBoxes/AdminDataInput"
import './AdminWine.css';



const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    padding: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundColor: 'rgba(119, 158, 209, 0)'
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },


});
////////////////////DRAG AND DROP/////////////////////////

// fake data generator
// const getItems = count =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k}`,
//     content: `item ${k}`,
//   }));
// console.log('k')
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// const grid = this.state._id[i];

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  // padding: grid * 2,
  // margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'rgba(119, 158, 209, 0)',

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'rgba(119, 158, 209, 0)',
  // padding: ,
  flexGrow: 1,
  maxWidth: 500,

});


class AdminWineEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      result: []
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  //////////////////DRAG AND DROP/////////////////////////
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const data = reorder(
      this.state.data,
      result.source.index,
      result.destination.index
    );
    console.log(this.state.data);
    console.log(result.source.index);
    console.log(result.destination.index);

    this.setState({
      data,
    });
  }
  /////////////////////////////////////////////////////////
  formatPrice = price => {
    const dotPos = price.length - 2;
    return price.substring(0, dotPos) + "." + price.substring(dotPos, price.length);
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
        // console.log("response data");
        // console.log(res.data);
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

  handleWineChange = event => {
    console.log('target id')
  console.log(event.target.id)
  }

  render() {

    // const wine = this.state.wine;
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
          <br></br>
            <Paper className={classes.paper}><h3>Wine Data Input</h3><hr></hr>
            <AdminDataInput />
            </Paper>
          </Grid>
          <Grid item xs={6}>
          <br></br>
            <Paper id='wineBG' className={classes.paper}><h3>Wine Card</h3>
            <hr></hr>
              <Grid container spacing={24}>
                <Grid id='wineBGO'item xs={12}>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                      <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                          >
                              {this.state.data.map((wine, index) => (
                                <div className={classes.root}>
                                <Draggable key={index} draggableId={wine._id} index={index}>
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                      )}
                                    >

                                  {/* //AdminWineEdit */}
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
                                          {/* <Grid style={{display:'none'}}>{`${wine._id}`}</Grid> */}
                                          <Grid item xs container style={{ maxWidth: '85%' }} direction="column" spacing={24}>
                                            <Grid item xs>
                                              <Typography gutterBottom variant="subtitle1">
                                                {`${wine.name}`}
                                              </Typography>
                                              {/* <Typography gutterBottom className="truncate">{`${wine.description}`}</Typography> */}
                                            </Grid>
                                            <Grid item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                              {/* <EditButton /> */}
                                              <div>
                                                <Button variant="outlined" id={wine._id} className={classes.button}
                                                onClick={this.props.handleWineChange}>
                                                  Edit
                                                </Button>
                                              </div>
                                            </Grid>
                                          </Grid>
                                          <Grid item>
                                            <Typography variant="subtitle1">{`$ ${this.formatPrice(wine.priceRegular)}`}</Typography>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </Paper>


                                  </div>
                                )}
                              </Draggable>

                              {provided.placeholder}
                            </div>
                          ))}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                  {/* <WineCardAdmin wine={wineData} i={i} id={wineData._id} handleCardClick={this.handleCardClick} isActive={this.state.activeCard === wineData._id} /> */}

                </Grid>
              </Grid>
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