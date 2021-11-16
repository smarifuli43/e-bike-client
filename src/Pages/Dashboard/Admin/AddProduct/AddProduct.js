import { Alert, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    fetch('https://young-eyrie-90744.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true)
          reset();
        }
      });
  };

  return (
    <Container>
      <Box
        className='add-product'
        sx={{ borderRadius: 1, maxWidth: 600, mx: 'auto', p: 3, my: 10 }}
      >
        <h2 className='heading-main'> Add a product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder='Service Name'
            {...register('name', { required: true })}
          />

          <input
            placeholder='Price'
            {...register('price', { required: true })}
          />

          <input
            placeholder='Image link'
            {...register('img', { required: true })}
          />
          <textarea
            placeholder='Short description'
            {...register('description', { required: true })}
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

export default AddProduct;
