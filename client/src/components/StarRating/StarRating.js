import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './StarRating.css';
class StarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    };
  }

  onStarClick = nextValue => {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <StarRatingComponent
          name={`StarComp - ${this.props.id}`}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}


export default StarRating;