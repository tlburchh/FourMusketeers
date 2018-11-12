import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Thumbs from "../Thumbs";

import "./CommentPopover.css";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const theme = createMuiTheme({
  typography: {
    margin: '2rem'
  }
});

class CommentPopover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      keywords: Array(this.props.keys.length).fill(null)
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

  thumbClickHandler = index => event => {

    let targ = event.target.parentNode;
    // get thumb-box every time
    if (targ.tagName === 'svg') {
      targ = targ.parentNode;
    }
    const upDown = targ.getAttribute("data-val");
    if (upDown === 'up') {

      const tmpArr = [...this.state.keywords.slice(0, index), true, ...this.state.keywords.slice(index + 1)];
      this.setState({
        keywords: tmpArr
      }, () => {
        this.props.keywordGetter(this.state.keywords, this.props.identifier);
      });
    }
    else if (upDown === 'down') {
      const tmpArr = [...this.state.keywords.slice(0, index), false, ...this.state.keywords.slice(index + 1)];
      this.setState({
        keywords: tmpArr
      }, () => {
        this.props.keywordGetter(this.state.keywords, this.props.identifier);
      });
    }
    else {
      console.log("Something went wrong");
    }
  }

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
          <div className={classes.typography} >
            {
              keywds.map((k, i) => {
                return (
                  <Thumbs
                    keyword={k.keyword}
                    key={i}
                    goodBad={this.state.keywords[i]}
                    thumbClickHandler={this.thumbClickHandler(i)}
                  />
                )
              })
            }
          </div>
        </Popover>
      </React.Fragment>
    );
  }
}


CommentPopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(CommentPopover);