// Assuming this file handles the logic for fetching and calculating review percentages
const calculateReviewPercentage = (reviews) => {
    const totalReviews = reviews.length;
    const positiveReviews = reviews.filter(review => review.rating >= 4).length;
    return totalReviews > 0 ? (positiveReviews / totalReviews) * 100 : 0;
};

// Example usage in a component
const ReviewComponent = ({ reviews }) => {
    const reviewPercentage = calculateReviewPercentage(reviews);
    return <div>{`Positive reviews: ${reviewPercentage}%`}</div>;
};