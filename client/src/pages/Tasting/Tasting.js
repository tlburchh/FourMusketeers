
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import wineCard from '../../components/wineCard/wineCard';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        {/* <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div> */}
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <div key={card.id} className={classes.root}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Grid container spacing={16}>                  
                        <Grid item xs={12} lg container>
                          <Grid item xs container direction="column" spacing={24}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                Standard license
                                     </Typography>
                                     <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                                    <Typography color="textSecondary">ID: 1030114</Typography>
                                </Grid>
                                <Grid item>
                                  <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                               </Grid>
                              </Grid>
                            <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
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

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);