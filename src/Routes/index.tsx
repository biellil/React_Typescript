import React from 'react';
import {Switch,Route} from 'react-router-dom';
import PreLoader1 from '../pages/Loader/PreLoader1';
//import { Dashboard } from '../pages/Dashboard';
//import { Repo } from '../pages/Repo';
//const PreLoader1 = React.lazy(() => import('../pages/Loader/PreLoader1'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Repo = React.lazy(() => import('../pages/Repo'));


export const routes: React.FC = ()=> {
  return (
    
    <React.Suspense fallback={< PreLoader1/>}>
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Repo} path="/repositories/:repository+" />
  
      </Switch>
  </React.Suspense>
    )
};

