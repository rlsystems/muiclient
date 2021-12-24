import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect } from 'react';


import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BrandDashboard from '../../features/brands/dashboard/BrandDashboard';
import BrandForm from '../../features/brands/form/BrandForm';
import Dashboard from '../../features/dashboard/Dashboard';
import Orders from '../../features/dashboard/Orders';
import HomePage from '../../features/home/HomePage';
import LoginPage from '../../features/login/LoginPage';
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
                  <Route exact path='/dashboard' component={Dashboard} />
                  <Route exact path='/orders' component={Orders} />
                  <Route exact path='/brands' component={BrandDashboard} />
                  <Route exact key={location.key} path={['/createBrand', '/editBrand/:id']} component={BrandForm} />
                  
                </Switch>
              </Box>


          
          )} />
      </Switch>


    </>




  );
}


export default observer(App);