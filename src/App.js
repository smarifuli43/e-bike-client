import './App.css';
import Home from './Pages/Home/Home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/Purchase/Purchase';
import AddProduct from './Pages/Dashboard/Admin/AddProduct/AddProduct';
import MoreProducts from './Pages/MoreProducts/MoreProducts';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/addproduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route path='/moreproducts'>
              <MoreProducts></MoreProducts>
            </Route>
            <PrivateRoute path='/purchase'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
