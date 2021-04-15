import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Loader from './components/loader'
import History from './history';

// COMPONENTES LOGIN


const Home = lazy(() => import('./page/home'))
const Lista = lazy(() => import('./page/home/clients-list/clients-list'))
const Routes: React.FC = () => {
  return (

    <Router history={History}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/clients-list" component={Lista} /> */}
        </Switch>
      </Suspense>
    </Router>

  );
};


export default Routes;
