import { Alert, Button,  Container, Grid, TextField } from '@mui/material';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from '../../../img/login.svg';

const Register = () => {
  const {
    setName,
    setEmail,
    setPassword,
    signInUsingGoogle,
    createNewUser,
    error,
  } = useAuth();
  const history = useHistory();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    createNewUser();
    history.push('/login');
  };

  return (
    <Container sx={{ textAlign: 'center', py: 5 }}>
      <h2 className='heading-main'>Create a New Account</h2>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <img
            src={loginImg}
            alt=''
            style={{ width: '100%', maxHeight: '500px' }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ boxShadow: 2, py: 5,mt:3, borderRadius: 1 }}>
          <form onSubmit={handleSubmit} sx={{ mt: 20 }}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id='standard-basic'
              label='Your name'
              name='name'
              variant='standard'
              required
              onBlur={handleNameChange}
            />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id='standard-basic'
              label='Your Email'
              name='email'
              type='email'
              required
              variant='standard'
              onBlur={handleEmailChange}
            />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id='standard-basic'
              label='Your Password'
              type='password'
              name='password'
              required
              variant='standard'
              onBlur={handlePasswordChange}
            />
            <Button
              // onClick={handleLoginSubmit}
              variant='contained'
              type='submit'
              sx={{ width: '75%', mt: 2 }}
              className='btn-ebike'
            >
              Register
            </Button>
            <NavLink style={{ textDecoration: 'none' }} to='/login'>
              <Button variant='text' sx={{ color: '#e64934', mt: 3 }}>
                Already registered? Please Login
              </Button>
            </NavLink>
          </form>
          {error && <Alert severity='error'>{error}</Alert>}
          <p>--------------Or---------------</p>
          <Button
            className='btn-ebike'
            variant='contained'
            onClick={signInUsingGoogle}
          >
            Google sign In
          </Button>
          {/* {isLoading && <CircularProgress />} */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;