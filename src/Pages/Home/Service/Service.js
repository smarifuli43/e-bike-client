import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Service = (props) => {
  const { name, img, description } = props.service;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <i
          class={`fas ${img}`}
          style={{ fontSize: '45px', color: '#FF634E' }}
        ></i>

        <Typography variant='h5' sx={{fontWeight:600, mt:2}}>{ name}</Typography>
        <Typography variant='h6' sx={{ mt: 2, fontSize: 16 }}>{description }</Typography>
      </Paper>
    </Grid>
  );
};

export default Service;