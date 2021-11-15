import React from 'react';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';



const GivenReview = (props) => {
  const { name, rating, reviewText } = props.review;
  console.log(props.review);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ py: 5, px: 3 }}>
        <Rating name='read-only' value={rating} readOnly size='large' />
        <Typography variant='body1'>{reviewText.slice(0, 150)}</Typography>
        <Typography variant='h6' sx={{ mt: 2, fontSize: 16 }}>
          By <span style={{ color: '#FF634E' }}>{name}</span>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default GivenReview;