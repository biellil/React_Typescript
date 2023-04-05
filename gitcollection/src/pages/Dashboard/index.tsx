import { Title, Form, Repos } from"./styles"
import logo from "../../assets/logo.svg";
import { FiChevronRight } from 'react-icons/fi';

export const Dashboard: React.FC = ()=> {
  return (
    <>
    <img src = {logo} alt= "GitCollection"/>
    <Title>Catálogo de repositórios do Github</Title>
    <Form action="">
       <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
    </Form>
    
    <Repos>
        <a href="/repo">
          <img
            src="https://avatars.githubusercontent.com/u/68967867?v=4"
            alt="Repositorio"
          />
          <div>
            <strong>aluiziodeveloper/mini-curso-reactjs</strong>
            <p>Repositorio do mini curso gratuito de reactjs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
    );
};



