import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import { routes as Routes } from './Routes';



const App: React.FC = ()=> {
  return (

    <BrowserRouter>
    <Routes/>    
      </BrowserRouter>
    )
};


export default App;
