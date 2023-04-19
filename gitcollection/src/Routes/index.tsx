import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { Repositorio } from '../pages/Repo';

export const routes: React.FC = ()=> {
  return (
    <Switch>
        <Route component={Dashboard} path ='/' exact/>
        <Route component={Repositorio} path="/repositories/:repository+" />
        </Switch>
    )
};



