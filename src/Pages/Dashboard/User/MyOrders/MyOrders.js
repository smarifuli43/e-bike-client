import { Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://young-eyrie-90744.herokuapp.com/myorders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  console.log(orders);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed === true) {
      const url = `https://young-eyrie-90744.herokuapp.com/orders/${id}`;
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

  return (
    <Container>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          style={{ boxShadow: '0 0 15px -5px #00000069' }}
          sx={{ borderRadius: 1, width: '280px', mx: 'auto', p: 2, my: 8 }}
        >
          <h2 className='heading-main'>My Order</h2>
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

export default MyOrders;
