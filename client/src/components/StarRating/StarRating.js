import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './StarRating.css';
class StarRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    // console.log(this.state.rating);


    return (
      <div>
        {/* <h2>Rating from state: {rating}</h2> */}
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}


export default StarRating;