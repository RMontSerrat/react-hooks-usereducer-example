import React, { useEffect, useContext } from 'react';
import { urlGithub } from '../../config';
import Loading from '../../components/Loading/Loading';
import Container from '../../components/Container/Container';
import List from '../../components/List/List';
import Item from '../../components/List/Item';
import { 
  StoreContext,
  START_RESULT_REPOSITORIES, 
  SUCCESS_RESULT_REPOSITORIES,
  ERROR_RESULT_REPOSITORIES 
} from '../../store';

const Repositories = ({ match: { params: { login } } }) => {
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
    <Container>
      <h4>Mostrando repositórios de <b>{login}</b></h4>
      {loading ? <Loading /> : (
        <List>
          {data.map(item => 
            <Item 
              key={item.name}
              name={item.name}
              description={item.description}
              html_url={item.html_url} 
            />
          )}
        </List>
      )}
    </Container>
  )
}

export default Repositories;