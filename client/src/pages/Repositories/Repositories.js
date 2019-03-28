import React, { useEffect, useContext } from 'react';
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
import Empty from '../../components/Empty/Empty';

const Repositories = ({ match: { params: { login } } }) => {
  const { state: { repositories: { data, loading } }, dispatch } = useContext(StoreContext);

  const fetchData = async () => {
    dispatch({ type: START_RESULT_REPOSITORIES });
    const response = await fetch(`/users/${login}/repos`);
    if (response) {
      const result = await response.json();
      dispatch({ type: SUCCESS_RESULT_REPOSITORIES, data: result });
    } else {
      dispatch({ type: ERROR_RESULT_REPOSITORIES, error: 'Erro de servidor' });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const renderContent = () => {
    if (loading) {
      return <Loading />
    } else if (data && data.length <= 0) {
      return <Empty />
    } else if (data && data.length > 0) {
      return <List>
        {data.map(item => 
          <Item 
            key={item.name}
            name={item.name}
            description={item.description}
            html_url={item.html_url} 
          />
        )}
      </List>
    }
    return null;
  }

  return (
    <Container>
      <h4>Mostrando repositórios de <b>{login}</b></h4>
      {renderContent()}
    </Container>
  )
}

export default Repositories;