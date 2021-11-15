import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../Admin/AddProduct/AddProduct';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';
import MyOrders from '../User/MyOrders/MyOrders';


const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to='/'>
        <Button color='inherit'>Home</Button>
        <br />
      </Link>{' '}
      <Link to={`${url}`}>
        <Button color='inherit'>Dashboard</Button>
      </Link>{' '}
      <br />
      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`}>
            <Button color='inherit'>Make Admin</Button>
          </Link>{' '}
          <br />
          <Link to={`${url}/addproduct`}>
            <Button color='inherit'>Add Product</Button>
          </Link>{' '}
          <br />
        </Box>
      )}
      {!admin && (
        <Box >
          <Link to={`${url}/pay`} >
            <Button color='inherit'>Pay</Button>
          </Link>
          <br />
          <Link to={`${url}/myorders`}>
            <Button color='inherit'>My Orders</Button>
          </Link>
          <br />
          <Link to={`${url}/review`}>
            <Button color='inherit'>Review</Button>
          </Link>
          <br />
          <Button
            onClick={logOut}
            sx={{ mx: 2, color: '#ffffff' }}
            className='btn-ebike'
          >
            Log Out
          </Button>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#111111',
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/pay`}>
           <Pay></Pay>
          </Route>
          <Route exact path={`${path}/myorders`}>
           <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/review`}>
           <Review></Review>
          </Route>
         
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
