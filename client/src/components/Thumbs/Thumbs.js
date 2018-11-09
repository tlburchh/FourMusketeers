import React from 'react';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

import "./Thumbs.css";

class Thumbs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: null,
            up: "",
            down: ""
        };
    }

    // Workaround to deal with clicking on damn SVGs
    thumb = event => {
        let targ = event.target.parentNode;
        // get thumb-box every time
        if (targ.tagName === 'svg') {
            targ = targ.parentNode;
        }
        const upDown = targ.getAttribute("data-val");
        if (upDown === 'up') {
            console.log(upDown);
            this.setState({
                up: 'upActive',
                down: "",
                clicked: true
            });
        }
        else if (upDown === 'down') {
            console.log(upDown);
            this.setState({
                down: 'downActive',
                up: "",
                clicked: false
            });
        }
        else {
            console.log("Something wrong");
        }
    }

    render() {

        return (
            <div className="keyword-row">
                {this.props.keyword}
                <div className="thumb-holder">
                    <div className='thumb-box' data-val="down">
                        <ThumbDown className={`thumb down ${this.state.down}`} onClick={this.thumb} />
                    </div>
                    <div className='thumb-box' data-val="up">
                        <ThumbUp className={`thumb up ${this.state.up}`} onClick={this.thumb} />
                    </div>
                </div>
            </div>

        );
    }
}


export default Thumbs;