import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://young-eyrie-90744.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <Box sx={{ bgcolor: '#E4E4E4' }}>
      <Container sx={{ textAlign: 'center', py: 6 }}>
        <h3 className='heading-before'>Latest Product</h3>
        <h2 className='heading-main'>New Arrival Product</h2>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
