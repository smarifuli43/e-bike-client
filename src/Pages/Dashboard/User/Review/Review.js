import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';


const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = React.useState(2);
  const onSubmit = (data) => {
    data.rating = value;
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('review added');
          reset();
        }
      });
  };
  return (
    <Container>
      <Box
        className='add-product'
        sx={{ borderRadius: 1, maxWidth: 600, mx: 'auto', p: 5, my: 10 }}
      >
        <h2 className='heading-main'> Give Review</h2>
        <Rating
          name='simple-controlled'
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder='Service Name'
            {...register('name', { required: true })}
            defaultValue={user.displayName}
          />

          <textarea
            placeholder='Your Reviews'
            {...register('reviewText', { required: true })}
          />
          <input
            type='submit'
            className='btn-ebike'
            style={{
              width: '100px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          />
        </form>
      </Box>
    </Container>
  );
};

export default Review;