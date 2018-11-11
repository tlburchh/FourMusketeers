import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ConfirmDialog extends React.Component {

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.openState}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={this.props.close}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Submit ratings?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Are you sure you want to submit your ratings?
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.close} color="primary">
                            No
            </Button>
                        <Button onClick={this.props.close} color="primary">
                            Yes
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ConfirmDialog;
