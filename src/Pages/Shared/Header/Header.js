import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useHistory } from 'react-router-dom';
 import logo from '../../../img/E-bike.png'
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
  const { user, logOut } = useAuth();
  const history = useHistory()

  const logOutUser = () => {
    logOut(history);
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#111111' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <img src={logo} alt='' style={{ width: '80px' }} />
          </Typography>
          <NavLink
            style={{ textDecoration: 'none', color: 'white' }}
            to='/home'
          >
            Home
          </NavLink>
          <NavLink
            style={{
              textDecoration: 'none',
              color: 'white',
              marginLeft: '15px',
            }}
            to='/dashboard'
          >
            Dashboard
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', color: 'white' }}
            to='/login'
          >
            {user?.email ? (
              <Button
                onClick={logOutUser}
                sx={{ mx: 2, color: '#ffffff' }}
                className='btn-ebike'
              >
                Log Out
              </Button>
            ) : (
              <Button color='inherit' sx={{ ml: 3 }} className='btn-ebike'>
                Login
              </Button>
            )}
          </NavLink>
          <Typography variant='h5'>{user?.displayName}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;