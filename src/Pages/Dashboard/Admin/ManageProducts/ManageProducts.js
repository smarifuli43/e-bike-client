import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Grid } from '@mui/material';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://young-eyrie-90744.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed === true) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('deleted successfully');
            const remaining = products.filter((order) => order._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ boxShadow: '0 0 15px -5px #00000069' }}
          sx={{ borderRadius: 1,width:'280px',  mx: 'auto', p: 5, my: 8 }}
        >
          <h2 className='heading-main'>All Products</h2>
          <TableContainer component={Paper}>
            <Table sx={{minWidth:400}} aria-label='order table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Product Name
                  </TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDelete(row._id)}
                        className='btn-ebike'
                        style={{ textTransform: 'capitalize' }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ManageProducts;
