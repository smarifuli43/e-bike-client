import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Grid } from '@mui/material';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/orders`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }, []);
 const handleDelete = (id) => {
   const proceed = window.confirm('Are you sure you want to delete?');
   if (proceed === true) {
     const url = `http://localhost:5000/orders/${id}`;
     fetch(url, {
       method: 'DELETE',
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.deletedCount) {
           alert('deleted successfully');
           const remaining = orders.filter((order) => order._id !== id);
           setOrders(remaining);
         }
       });
   }
  };
   const handleApproval = (id) => {
     const orderClicked = orders.filter((order) => order._id === id);
     orderClicked[0].status = 'Approved';
     fetch(`http://localhost:5000/orders/${id}`, {
       method: 'PUT',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(orderClicked),
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.modifiedCount > 0) {
           const ord = orders.filter(
             (order) => order.status === 'pending' || 'Approved'
           );
           setOrders(ord);
         }
       });
   };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ boxShadow: '0 0 15px -5px #00000069' }}
          sx={{ borderRadius: 1,width:'280px' , mx: 'auto', p: 5, my: 8 }}
        >
          <h2 className='heading-main'>All Orders</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label='order table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Product Name
                  </TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Quantity
                  </TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Actions
                  </TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.productName}
                    </TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>${row.price * row.quantity}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDelete(row._id)}
                        className='btn-ebike'
                        style={{ textTransform: 'capitalize' }}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleApproval(row._id)}
                        className='btn-ebike'
                        style={{ textTransform: 'capitalize' }}
                      >
                        Approve?
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

export default ManageOrders;