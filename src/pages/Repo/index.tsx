import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepoInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';
import {api} from '../../services/api';
import PreLoader1 from '../Loader/PreLoader1';

interface RepositoryParams {
  repository: string;
}
interface GithubRepository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}


 const Repo: React.FC = () => {
  const [repository, setRepository] =
  React.useState<GithubRepository | null>(null);
  const [issues, setIssues] = React.useState<GithubIssue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  React.useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then(response => setRepository(response.data));

    api
      .get(`repos/${params.repository}/issues`)
      .then(response => setIssues(response.data));
  }, [params.repository]);

  

  return (
    <React.Suspense fallback={< PreLoader1/>}>
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <a href="/">
          <FiChevronLeft />
          Voltar
        </a>
      </Header>
      {repository && (
        <RepoInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>curtidas</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Bifurcações</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Problemas</span>
            </li>
          </ul>
        </RepoInfo>
      )}
      <Issues>
        {issues.map(issues =>(
            <a href={issues.html_url} key={issues.id}>
            <div>
              <strong>{issues.title}</strong>
              <p>{issues.user.login}</p>
            </div>
  
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
    </React.Suspense>
  );
};
export default Repo;