import React, { useEffect, useContext } from 'react';
import { 
  StoreContext,
  START_RESULTUSERS, 
  SUCCESS_RESULTUSERS,
  ERROR_RESULTUSERS 
} from '../../store';
import Container from '../../components/Container/Container';
import List from '../../components/List/List';
import User from '../../components/User/User';
import Loading from '../../components/Loading/Loading';
import Empty from '../../components/Empty/Empty';

const Home = ({ location }) => {
  const { state: { users: { data, currentSearch, loading } }, dispatch } = useContext(StoreContext);

  const fetchData = async () => {
    if (
      !location.search || 
      (data && data.length > 0 && location.search === currentSearch)
    ) return;

    dispatch({ type: START_RESULTUSERS, query: location.search });
    const response = await fetch(`/search/users${location.search}`);
    
    if (response) {
      const { items } = await response.json();
      dispatch({ type: SUCCESS_RESULTUSERS, data: items });
    } else {
      dispatch({ type: ERROR_RESULTUSERS, error: 'Erro de servidor' });
    }
  }

  const getTermSearch = () => location.search ? location.search.split("?q=")[1] : null;

  const renderContent = () => {
    if (loading) {
      return <Loading />
    } else if (data && data.length <= 0) {
      return <Empty />
    } else if (data && data.length > 0) {
      return <List>
        {data.map(item => (
          <User key={item.login} login={item.login} avatarUrl={item.avatar_url} id={item.id} />
        ))}
      </List>
    }
    return null;
  }

  useEffect(() => {
    fetchData();
  }, [location.search]);

  return (
    <Container>
      {!!getTermSearch() && <h4>Mostrando resultado de busca para <b>"{getTermSearch()}"</b></h4>}
      {renderContent()}
    </Container>
  )
}


export default Home;