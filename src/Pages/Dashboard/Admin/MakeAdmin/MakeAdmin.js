import { Alert, Button, Container, TextField, } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch('https://young-eyrie-90744.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
        }
      });

    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <Container>
       <Box
        className='make-admin'
        sx={{ borderRadius: 1, maxWidth: 600, mx: 'auto', p: 5, my: 10 }}
      >
        <h2 className='heading-main'>Make Admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: 1,mb:2 }}
            id='standard-basic'
            type='email'
            onBlur={handleOnBlur}
            label='Enter email address'
            variant='standard'
          />
          <Button variant='contained' className='btn-ebike' type='submit'>
            Make Admin
          </Button>
        </form>
        {success && <Alert severity='success'>Made admin successfully</Alert>}
      </Box>
    </Container>
  );
};

export default MakeAdmin;
