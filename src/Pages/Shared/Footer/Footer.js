import { Container, Grid, Typography,  } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import  logo from '../../../img/E-bike.png'
import './Footer.css'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#111111', }}>
      <Container sx={{ pt: 8, pb:5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <img src={logo} alt='' style={{ width: '100px' }} />
            <p style={{ color: '#cccccc' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, dolor natus dolorem consectetur reiciendis ipsam quae
              omnis consequuntur ducimus
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <h3
              style={{
                color: '#cccccc',
                textTransform: 'uppercase',
                borderLeft: '2px solid #ffffff',
                paddingLeft: '10px',
              }}
            >
              Quick Links
            </h3>
            <div className='quick-links'>
              <i className='fas fa-chevron-right '></i>
              <a href='/'>My Order</a>
            </div>
            <div className='quick-links'>
              <i className='fas fa-chevron-right '></i>
              <a href='/'>Manage Order</a>
            </div>
            <div className='quick-links'>
              <i className='fas fa-chevron-right '></i>
              <a href='/'>Add Service</a>
            </div>
            <div className='quick-links '>
              <i className='fas fa-chevron-right'></i>
              <a href='/'>Home</a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <div style={{ color: '#cccccc' }}>
              <h3
                style={{
                  color: '#cccccc',
                  textTransform: 'uppercase',
                  borderLeft: '2px solid #ffffff',
                  paddingLeft: '10px',
                }}
              >
                contact information
              </h3>

              <p style={{ marginBottom: '30px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                ipsum.
              </p>
              <div style={{ marginBottom: '15px' }}>
                <i
                  className='fas fa-phone-alt'
                  style={{ color: '#e64934', marginRight: '10px ' }}
                ></i>
                <span className='text-white-50 ms-3'>+01858585858</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <i
                  a
                  className='fas fa-envelope'
                  style={{ color: '#e64934', marginRight: '10px ' }}
                ></i>
                <span className='text-white-50 ms-3'>contact@gmail.com</span>
              </div>
              <div>
                <i
                  className='fas fa-map-marker-alt'
                  style={{ color: '#e64934', marginRight: '10px ' }}
                ></i>
                <span className='text-white-50 ms-3'>Dhaka, Bangladesh</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Typography
        variant='body1'
        style={{
          color: '#cccccc',
          textAlign: 'center',
          padding: '25px 0',
          borderTop: '1px solid #fffefe21',
        }}
      >
        Copyright &copy; E-bike store | 2021
      </Typography>
    </Box>
  );
};

export default Footer;