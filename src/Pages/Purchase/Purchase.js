import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import { useForm } from 'react-hook-form';
import './Purchase.css';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {
  const { id } = useParams();
  const {user} = useAuth()
  const [products, setProducts] = useState({});
  const [success, setSuccess] = useState(false);
  const { name, description, price, img } = products;
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = 'pending';
    data.productName = name;
    data.price = price;
    console.log(data);
    fetch('http://localhost:5000/orders', {
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
    <>
      <Header></Header>
      <Box sx={{ my: 6 }}>
        <Container
          sx={{ textAlign: 'center', py: 6, bgcolor: '#F6F6F6' }}
          className='purchase'
        >
          <h2 className="heading-main">Your Order</h2>
          <Grid container spacing={3} sx={{ mt: 4, px:4 }}>
            <Grid item xs={12} sm={6} sx={{textAlign:'left'}}>
              <img
                src={img}
                alt=''
                style={{
                  maxwidth: '100%',
                  height: '300px',
                  marginTop: '-70px',
                }}
              />
              <Box>
                <Typography
                  variant='h3'
                  sx={{ fontSize: 18, fontWeight: 600, pl: 1 }}
                  color='text.primary'
                  gutterBottom
                >
                  {name}
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ fontSize: 18, mt: 2, mb: 1, fontWeight: 600, pl: 1 }}
                  component='div'
                >
                  Price: ${price}
                </Typography>
                <Typography variant='body1' sx={{ pl: 1 }} component='div'>
                  {description}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} className='purchase-form' sx={{px:3,mt:4}}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder='Your Name'
                  {...register('name', { required: true })}
                  defaultValue={user.displayName}
                />

                <input
                  type='email'
                  placeholder='Your Email'
                  {...register('email', { required: true })}
                  defaultValue={user.email}
                />

                <input
                  placeholder='Your address'
                  {...register('address', { required: true })}
                />
                <input
                  placeholder='Your Phone Number'
                  {...register('phoneNumber', { required: true })}
                />

                <input
                  type='number'
                  placeholder='Quantity'
                  {...register('quantity', { required: true })}
                />

                <Button type='submit' variant='contained' className='btn-ebike'>
                  Order
                </Button>
              </form>
              {success && (
                <Alert severity='success'>
                  Order success
                </Alert>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Purchase;
