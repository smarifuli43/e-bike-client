import { Alert, Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from '../../../img/login.svg'

const Login = () => {
  const {
    setUser,
    setEmail,
    setPassword,
    signInUsingGoogle,
    signInWithEmailAndPass,
    setIsLoading,
    error,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPass().then((result) => {
      history.push(redirect_url);
      setUser(result.user);
      console.log(result?.user);
    });
  };
  const handleSignInUsingGoogle = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
        setUser(result.user);
        console.log(result?.user);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Container sx={{ textAlign: 'center', py: 5 }}>
      <h2 className='heading-main'>Please Login</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={loginImg}
            alt=''
            style={{ width: '100%', maxHeight: '450px' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ mt: 12, pl: 0, py: 5, boxShadow: 2, borderRadius: 1 }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id='standard-basic'
              label='Your Email'
              name='email'
              required
              type='email'
              variant='standard'
              onBlur={handleEmailChange}
            />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id='standard-basic'
              label='Your Password'
              type='password'
              required
              name='password'
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
              Login
            </Button>
            <NavLink style={{ textDecoration: 'none' }} to='/register'>
              <Button sx={{ color: '#e64934', mt: 3 }} variant='text'>
                New User? Please Register
              </Button>
            </NavLink>
          </form>
          <h4>--------------Or---------------</h4>
          <Button
            className='btn-ebike'
            variant='contained'
            onClick={handleSignInUsingGoogle}
          >
            Google sign In
          </Button>
          {error && <Alert severity='error'>{error}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;