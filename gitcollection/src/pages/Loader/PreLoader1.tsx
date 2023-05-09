import React from 'react';
import logo from '../../assets/logo.svg';
import { SweetLoading , OverrideClipLoader } from'./styles';

const PreLoader1: React.FC = () => {

  return (
    <>
      <img src={logo} alt="GitCollection" />
  
    <SweetLoading>
      <OverrideClipLoader size='' color='' />
    </SweetLoading>
  
    </>
  );
};

export default PreLoader1;