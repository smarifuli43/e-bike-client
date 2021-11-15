import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
const { register, handleSubmit, reset } = useForm();
const onSubmit = (data) => {
  console.log(data);
  fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.insertedId) {
        alert('service added');
        reset();
      }
    });
};


  return (
    <Container>
      <Box className='add-service' sx={{ borderRadius: 1, maxWidth: 600, mx: 'auto', p: 5, my: 15 }}>
        <h2 className="heading-main"> Add a product</h2>
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
      </Box>
    </Container>
  );
};

export default AddProduct;