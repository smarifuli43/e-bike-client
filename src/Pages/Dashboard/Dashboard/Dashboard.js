import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../Admin/AddProduct/AddProduct';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';
import MyOrders from '../User/MyOrders/MyOrders';
import logo from '../../../img/E-bike.png';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import './Dashboard.css';

const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logOut, user } = useAuth();
  const history = useHistory();

  const logOutUser = () => {
    logOut(history);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box className='dashboard-top'>
        {user?.photoURL ? (
          <img src={user?.photoURL} alt='' />
        ) : (
          <i class='fas fa-user' style={{ fontSize: '50px' }}></i>
        )}
        <h4>{user.displayName}</h4>
      </Box>
      <Box className='dashboard-link' sx={{ mt: 3 }}>
        <NavLink to='/'>Home</NavLink>{' '}
        <NavLink to={`${url}`}>Dashboard Home</NavLink>{' '}
      </Box>
      {admin && (
        <Box className='dashboard-link'>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to={`${url}/makeAdmin`}
          >
            Make Admin
          </NavLink>{' '}
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to={`${url}/addproduct`}
          >
            Add Product
          </NavLink>{' '}
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to={`${url}/manageorders`}
          >
            Manage Orders
          </NavLink>{' '}
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to={`${url}/manageproducts`}
          >
            Manage Products
          </NavLink>{' '}
          <Button
            onClick={logOutUser}
            sx={{ mr: 2, color: '#ffffff' }}
            className='btn-ebike'
          >
            Log Out
          </Button>
        </Box>
      )}
      {!admin && (
        <Box className='dashboard-link'>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to={`${url}/pay`}
          >
            Pay
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to={`${url}/myorders`}
          >
            My Orders
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to={`${url}/review`}
          >
            Review
          </NavLink>
          <Button
            onClick={logOutUser}
            sx={{ mr: 2, color: '#ffffff' }}
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
          <Typography variant='h6' noWrap component='div' style={{display:'flex' , justifyContent:'center', width:'100%'}}>
            <img src={logo} alt='' style={{ width: '100px' }} />
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
          <PrivateRoute exact path={`${path}/pay`}>
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute exact path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path={`${path}/review`}>
            <Review></Review>
          </PrivateRoute>

          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageorders`}>
            <ManageOrders></ManageOrders>
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
