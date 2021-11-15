import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return (
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '80px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (!admin) {
    return (
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '80px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
