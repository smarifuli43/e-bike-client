import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import GivenReview from '../GivenReview/GivenReview';

const GivenReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <Box sx={{ bgcolor: '#E4E4E4' }}>
      <Container sx={{ textAlign: 'center', py: 6 }}>
        <h3 className='heading-before'>reviews</h3>
        <h2 className='heading-main'>Latest Review</h2>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {reviews.slice(0, 6).map((review) => (
            <GivenReview
            key={review._id}
            review={review}
            ></GivenReview>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GivenReviews;