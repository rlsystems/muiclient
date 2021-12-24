import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect } from 'react';


import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BrandDashboard from '../../features/brands/dashboard/BrandDashboard';
import BrandForm from '../../features/brands/form/BrandForm';
import Dashboard from '../../features/dashboardSample/Dashboard';
import Orders from '../../features/dashboardSample/Orders';
import HomePage from '../../features/home/HomePage';
import LoginPage from '../../features/login/LoginPage';
import TenantDashboard from '../../features/tenants/dashboard/TenantDashboard';
import TenantForm from '../../features/tenants/form/TenantForm';
import UserDashboard from '../../features/users/dashboard/UserDashboard';
import UserProfile from '../../features/users/form/UserProfile';
import UserRegistration from '../../features/users/form/UserRegistration';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import NavBar from './NavBar';



function App() {


  const location = useLocation(); //returns location object from router, useful for the key
  const { commonStore, userStore } = useStore();


  //do something when this component loads
  //in this case, get the current user (otherwise reloading browser will clear mobx)
  useEffect(() => {
    if (commonStore.token) {
      userStore.getCurrentUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent />

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />

      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/' component={HomePage} />
        <Route
          path={'/(.+)'}
          render={() => (
          
              <Box sx={{ display: 'flex' }}>
                <NavBar />

                <Switch>
                  {/* Sample Dashboard */}
                  <Route exact path='/dashboard' component={Dashboard} />

                  <Route exact path='/brands' component={BrandDashboard} />
                  <Route exact key={location.key} path={['/createBrand', '/editBrand/:id']} component={BrandForm} />
                  
                  <Route exact path='/users' component={UserDashboard} />
                  <Route exact path='/createUser' component={UserRegistration} />
                  <Route exact key={location.key} path={['/editUser', '/editUser/:id']} component={UserProfile} />

                  <Route exact path='/tenants' component={TenantDashboard} />
                  <Route exact key={location.key} path={['/createTenant', '/editTenant/:id']} component={TenantForm} />
                  
                </Switch>
              </Box>


          
          )} />
      </Switch>


    </>




  );
}


export default observer(App);