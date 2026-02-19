// Example of a React component that displays review percentages
import React from 'react';
import { calculateReviewPercentage } from './reviewService';

const ReviewComponent = ({ reviews }) => {
    const reviewPercentage = calculateReviewPercentage(reviews);
    return (
        <div>
            <h3>Reviews</h3>
            <p>{`Positive reviews: ${reviewPercentage}%`}</p>
        </div>
    );
};

export default ReviewComponent;