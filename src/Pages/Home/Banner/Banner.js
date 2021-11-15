import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10} md={8} lg={6} className='hero-text-container'>
            <Typography variant='h2' className='main-heading' sx={{ mb: 2 }}>
              Get Your <br /> Extreme Bycycle
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              We sell the most modern bycycle and Electrical bike in the market.
              Here you will find all kinds of e-bike and their accessories .
            </Typography>
            <NavLink
              to='/moreproducts'
              className=' btn-ebike'
              style={{
                marginTop: '10px',
                display: 'inline-block',
                textTransform: 'uppercase',
              }}
            >
              Shop Now
            </NavLink>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;