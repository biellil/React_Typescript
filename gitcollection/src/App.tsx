import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { routes as Routes } from './Routes';



const App: React.FC = ()=> {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};


export default App;
