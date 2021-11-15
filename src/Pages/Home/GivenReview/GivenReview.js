import React from 'react';

const GivenReview = (props) => {
  const { name, rating, reviewText } = props.review;
  console.log(props.review);
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat voluptatem blanditiis suscipit a, unde debitis. Asperiores, dolor officia. Ipsum enim minima aut vitae expedita maiores neque quae repellendus mollitia quos.
    </div>
  );
};

export default GivenReview;