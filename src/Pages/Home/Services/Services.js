import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Service from '../Service/Service';

const items = [
  {
    id: 1,
    name: 'Repair',
    img: 'fa-cogs',
    description:
      'Semper eget laoreet elementum nibh habitasse ut consectetuer vulputate curae',
  },
  {
    id: 2,
    name: 'Sparepart Selling',
    img: ' fa-shopping-cart',
    description:
      'Semper eget laoreet elementum nibh habitasse ut consectetuer vulputate curae',
  },
  {
    id: 3,
    name: 'Custom Bike',
    img: ' fa-tools',
    description:
      'Semper eget laoreet elementum nibh habitasse ut consectetuer vulputate curae',
  },
  {
    id: 4,
    name: 'Bike Selling',
    img: 'fa-bicycle',
    description:
      'Semper eget laoreet elementum nibh habitasse ut consectetuer vulputate curae',
  },
  {
    id: 5,
    name: 'Trade',
    img: 'fa-trailer',
    description:
      'Semper eget laoreet elementum nibh habitasse ut consectetuer vulputate curae',
  },
  {
    id: 6,
    name: 'Protection',
    img: 'fa-lock',
    description:
      'Semper eget laoreet elementum nibh habitasse ut consectetuer vulputate curae',
  },
];

const Services = () => {
  return (
    <Box sx={{ bgcolor: '#E4E4E4' }}>
      <Container sx={{ textAlign: 'center', mt: 5, py: 8 }}>
        <h3 className='heading-before'> service</h3>
        <h2 className='heading-main'>Offering Service</h2>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {items.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;