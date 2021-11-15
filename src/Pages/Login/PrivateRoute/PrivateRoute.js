import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ( {children, ...rest }) =>{
   const { user, isLoading } = useAuth();
   if (isLoading) {
     return (
       <Box style={{ display: 'flex', justifyContent: 'center', marginTop:'80px' }}>
         <CircularProgress />
       </Box>
     );
   }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;