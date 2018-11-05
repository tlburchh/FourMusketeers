import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const theme = createMuiTheme ({
  typography: {
    margin: '2rem'
  }
});

class CommentPopover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const keywds = this.props.keys;

    return (
      <React.Fragment>
        <Button
          aria-owns={open ? 'comment-popper' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
        >
          How was it?
      </Button>
        <Popover
          id="comment-popper"
          marginThreshold={20}
          open={open}
          onClose={this.handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography} >
            {
              keywds.map(k => {
                return k.keyword
              })
            }
          </Typography>
        </Popover>
      </React.Fragment>
    );
  }
}


CommentPopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(CommentPopover);