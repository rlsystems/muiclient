import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
import NotFound from './NotFound';

//Started from Create React App, Typescript
//https://mui.com/getting-started/example-projects/

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



  //Create the theme for MUI and pass to Theme Provider
  const theme = createTheme({
    palette: {
      mode: commonStore.darkMode ? 'dark' : 'light',
    },
  })


  if (!commonStore.appLoaded) return <LoadingComponent />

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* CssBaseline is a MUI universal CSS reset */}
        <CssBaseline />
        <ToastContainer position='bottom-right' hideProgressBar /> 


        {/* Full Pages */}
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/' component={HomePage} />

          {/* Pages with Side Navigation Bar */}
          <Route
            path={'/(.+)'}
            render={() => (

              <Box sx={{ display: 'flex' }}>
                <NavBar />

                <Switch>

                  <Route exact path='/dashboard' component={Dashboard} />

                  <Route exact path='/brands' component={BrandDashboard} />
                  <Route exact key={location.key} path={['/createBrand', '/editBrand/:id']} component={BrandForm} />

                  <Route exact path='/users' component={UserDashboard} />
                  <Route exact path='/createUser' component={UserRegistration} />
                  <Route exact key={location.key} path={['/editUser', '/editUser/:id']} component={UserProfile} />

                  <Route exact path='/tenants' component={TenantDashboard} />
                  <Route exact key={location.key} path={['/createTenant', '/editTenant/:id']} component={TenantForm} />
                  <Route component={NotFound} />
                </Switch>
              </Box>



            )} />
        </Switch>

      </ThemeProvider>




    </>




  );
}


export default observer(App);