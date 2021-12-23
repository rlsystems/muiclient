import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect } from 'react';


import { Route, Switch, useLocation } from 'react-router-dom';
import Dashboard from '../../features/dashboard/Dashboard';
import Orders from '../../features/dashboard/Orders';
import HomePage from '../../features/home/HomePage';
import LoginPage from '../../features/login/LoginPage';
import { useStore } from '../stores/store';



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

  if (!commonStore.appLoaded) return <div>LOADING APP</div>

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <nav>

            </nav>
            <main>
              <Switch>


                <Route exact path='/dashboard' component={Dashboard} />

              </Switch>
            </main>
          </>
        )} />

    </>




  );
}


export default observer(App);