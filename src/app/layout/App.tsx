import * as React from 'react';


import { Route, Router, BrowserRouter, Switch  } from 'react-router-dom';
import Dashboard from '../../features/dashboard/Dashboard';
import Orders from '../../features/dashboard/Orders';
import HomePage from '../../features/home/HomePage';
import LoginPage from '../../features/login/LoginPage';




export default function App() {
  return (
    <>
     <Route exact path='/' component={HomePage} />
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
