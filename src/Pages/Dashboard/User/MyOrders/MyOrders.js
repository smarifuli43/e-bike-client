import { Container, Grid,} from '@mui/material';
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
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  console.log(orders)
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ boxShadow: '0 0 15px -5px #00000069' }}
          sx={{ borderRadius: 1, maxWidth: 1000, mx: 'auto', p: 5, my: 8 }}
        >
          <h2 className='heading-main'>My Order</h2>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label='order table'>
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