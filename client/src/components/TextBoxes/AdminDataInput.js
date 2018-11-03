import React, { Component } from 'react';
import WineName from './WineName';
import WinePrice from './WinePrice';
import WineColor from './WineColor';
import WineDescription from './WineDescription';
// import WineComments from './WineComments';
// import WineAddRemove from './WineAddRemove';
// import WineSubmit from './WineSubmit';

// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
class AdminDataInput extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (

      <div>
      <WineName />
      <WinePrice />
      <WineColor />
      <WineDescription />
      {/* <WineComments /> */}
      {/* <WineAddRemove /> */}
      {/* <WineSubmit /> */}


      </div>
    )
  }
}

export default AdminDataInput;