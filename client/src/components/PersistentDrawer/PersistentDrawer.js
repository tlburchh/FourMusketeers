import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import PollIcon from '@material-ui/icons/Poll';
import MoodIcon from '@material-ui/icons/Mood';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';
import TastingButton from '../../components/TastingButton/TastingButton';



// import { generateKeyPairSync } from 'crypto';
import './pDrawer.css';
import CheckboxLabels from '../../components/Checkbox/Checkbox';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: 'rgba(119, 158, 209, 0.85)'

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(180, 203, 228, 0.95)',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class PersistentDrawerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  WineEdit = () => {

  }
  statsPage = () => {

  }
  emailPage = () => {

  }
  smilePage = () => {

  }




  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: '#495f86' }}
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
        <Grid container spacing={0}>
          <Grid item xs={2} sm container style={{
          }}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>


            <Typography variant="h5" color="inherit" noWrap>
              Admin Page

              {/* test code for check boxes */}
              {/* <CheckboxLabels /> */}
              {/* testing checklabels */}
            </Typography>
          </Toolbar>
          </Grid>

          <Grid item xs={8} sm container style={{
          }}>
            
<h2 textAlign='center'>Starlight Meads</h2>
          </Grid>

          <Grid item xs={2} sm container style={{
          }}>
          {/* Added by Karsten, greeting and logout to replace NAV */}
          <div id = "userInfo">
            {this.props.greeting}&nbsp;

                <TastingButton />

                <Button 
                variant="contained" 
                color="secondary" 
                className={('logout', classes.button)}
                size="large"
                href="/"
                onClick={this.props.logout}>
                Logout
                <NoMeetingRoomIcon className={classes.rightIcon} />
                </Button>&nbsp;

          </div>
          </Grid>
          </Grid>
        </AppBar>
        <Drawer
          className={classes.drawer}
          id="drawerrr"
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List id="list">
            {['Wine'].map((text, index) => (
              <ListItem button key={text}
                onClick={this.WineEdit}>
                <ListItemIcon> <AddToPhotosIcon /> </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Stats'].map((text, index) => (
              <ListItem button key={text}
                onClick={this.statsPage}>
                <ListItemIcon> <PollIcon /> </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Emails'].map((text, index) => (
              <ListItem button key={text}
                onClick={this.emailPage}>
                <ListItemIcon> <MailIcon /> </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[':)'].map((text, index) => (
              <ListItem button key={text}
                onClick={this.smilePage}>
                <ListItemIcon> <MoodIcon /> </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>
        <main>
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);