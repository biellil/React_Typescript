import React from 'react';
import {useRouteMatch} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi';

import { Header } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

export const Repositorio: React.FC = ()=> {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <a href="/">
          <FiChevronLeft />
          Voltar
        </a>
        <h1>Repo: {params.repository}</h1>
      </Header>
    </>
  );
};



