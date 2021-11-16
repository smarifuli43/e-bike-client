import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../../img/E-bike.png';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  const [hamstate, setHamState] = useState(false);
  const history = useHistory();
  console.log(hamstate);
  const logOutUser = () => {
    logOut(history);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#111111' }}>
        <Toolbar className='navbar-container'>
          <div className='ham-logo'>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              className='ham-burger '
            >
              <MenuIcon onClick={() => setHamState(!hamstate)} />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
              className='logo'
            >
              <img src={logo} alt='' style={{ width: '80px' }} />
            </Typography>
          </div>
          <div className={hamstate ? 'mobile-menu navbar' : ' navbar'}>
            <NavLink
              style={{ textDecoration: 'none', color: 'white' }}
              activeStyle={{
                fontWeight: 'bold',
                color: '#e64934',
              }}
              to='/home'
            >
              Home
            </NavLink>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                marginLeft: '20px',
              }}
              activeStyle={{
                fontWeight: 'bold',
                color: '#e64934',
              }}
              to='/moreproducts'
              className='align-left'
            >
              More Products
            </NavLink>

            {user?.email ? (
              <Box className='m-menu'>
                <NavLink
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    marginLeft: '20px',
                  }}
                  to='/dashboard'
                  className='align-left'
                >
                  Dashboard
                </NavLink>
                <Button
                  onClick={logOutUser}
                  sx={{ mx: 2, color: '#ffffff' }}
                  className='btn-ebike align-left'
                >
                  Log Out
                </Button>
              </Box>
            ) : (
              <Box className='m-menu'>
                <NavLink to='/login' style={{ textDecoration: 'none' }}>
                  <Button
                    color='inherit'
                    sx={{ ml: 3 }}
                    className='btn-ebike align-left '
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink
                  to='/register'
                  className='align-left'
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    className='align-left btn-ebike'
                    color='inherit'
                    sx={{ ml: 3 }}
                  >
                    Register
                  </Button>
                </NavLink>
              </Box>
            )}

            <Typography variant='h5'>{user?.displayName}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
