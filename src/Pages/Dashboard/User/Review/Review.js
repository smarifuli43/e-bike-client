import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Alert, Container, } from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = React.useState(2);
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    data.rating = value;
    fetch('https://young-eyrie-90744.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
                   setSuccess(true);
          reset();
        }
      });
  };
  return (
    <Container>
      <Box
        className='add-product'
        sx={{ borderRadius: 1, maxWidth: 600, mx: 'auto', p: 4, my: 10 }}
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
        {success && <Alert severity='success'>Order success</Alert>}
      </Box>
    </Container>
  );
};

export default Review;
