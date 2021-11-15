import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        height: '80vh',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#5C2EDE', fontSize: '80px' }}>404</h1>
      <h2>The page you looking for is not available!</h2>
      <Link to='/' className='btn-ebike'>
        Go Home
      </Link>
    </Box>
  );
};

export default NotFound;