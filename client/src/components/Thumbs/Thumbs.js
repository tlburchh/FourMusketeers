import React from 'react';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

import "./Thumbs.css";

class Thumbs extends React.Component {

    backgroundToggler = event => {
        let targ = event.target.parentNode;
        // get thumb-box every time
        if (targ.tagName === 'svg') {
            targ = targ.parentNode;
        }
        const upDown = targ.getAttribute("data-val");
        if (upDown === 'up') {
            this.setState({
                up: 'upActive',
                down: "",
                clicked: true
            });
        }
        else if (upDown === 'down') {
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
                        <ThumbDown
                            className={`thumb down ${!this.props.goodBad && this.props.goodBad !== null ? "downActive" : ""}`}
                            onClick={this.props.thumbClickHandler}
                        />
                    </div>
                    <div className='thumb-box' data-val="up">
                        <ThumbUp
                            className={`thumb up ${this.props.goodBad ? "upActive" : ""}`}
                            onClick={this.props.thumbClickHandler}
                        />
                    </div>
                </div>
            </div>

        );
    }
}


export default Thumbs;