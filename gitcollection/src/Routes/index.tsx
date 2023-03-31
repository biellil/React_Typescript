import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { repo } from '../pages/Repo';

export const routes: React.FC = ()=> {
  return (
    <switch>
        <Route component={Dashboard} path ='/' exact/>
        <Route component={repo} path= "/repo"/>
        </switch>
    )
};



