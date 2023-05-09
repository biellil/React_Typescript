import React from 'react';
import logo from '../../assets/logo.svg';
import { SweetLoading , OverrideClipLoader } from'./styles';

const PreLoader1: React.FC = () => {

  return (
    <>
    
  
    <SweetLoading>
    <img src={logo} alt="GitCollection" />
      <OverrideClipLoader size='150px' color='' />
      
    </SweetLoading>
  
    </>
  );
};

export default PreLoader1;