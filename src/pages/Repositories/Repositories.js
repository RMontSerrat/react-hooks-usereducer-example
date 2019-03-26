import React, { useEffect, useContext } from 'react';
import { urlGithub } from '../../config';
import Loading from '../../components/Loading/Loading';
import Container from '../../components/Container/Container';
import { StoreContext } from '../../components/Container/StoreContainer';
import List from '../../components/List/List';

const Item = ({ name, description, html_url }) => (
  <li>
    <a href={html_url} target="_blank" rel="noopener noreferrer">
        <h3>{name}</h3>
        <p>{description}</p>
    </a>
  </li>
)

const START_RESULT_REPOSITORIES = 'startResultRepositories';
const SUCCESS_RESULT_REPOSITORIES = 'successResultRepositories';
const ERROR_RESULT_REPOSITORIES = 'errorResultRepositories';

const Repositories = ({ match: { params: { login } }, query, history }) => {
  const { state: { repositories }, dispatch } = useContext(StoreContext);

  const fetchData = async () => {
    dispatch({ type: START_RESULT_REPOSITORIES });
    const result = await fetch(`${urlGithub}users/${login}/repos`);
    if (result) {
      const data = await result.json();
      dispatch({ type: SUCCESS_RESULT_REPOSITORIES, data });
    } else {
      dispatch({ type: ERROR_RESULT_REPOSITORIES, error: 'Erro de servidor' });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const { loading, data } = repositories;
  return (
    <Container query={query}>
      {loading ? <Loading /> : (
        <>
          <button onClick={history.goBack}>Voltar para busca</button>
          <List
            title={<h4>Mostrando repositórios de <b>{login}</b></h4>}
          >
            {data.map(item => 
              <Item 
                key={item.name}
                name={item.name}
                description={item.description}
                html_url={item.html_url} 
              />
            )}
          </List>
        </>
      )}
    </Container>
  )
}

export default Repositories;