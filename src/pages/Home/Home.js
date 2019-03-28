import React, { useEffect, useContext } from 'react';
import { urlGithub } from '../../config';
import './Home.scss';
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

const Home = ({ location }) => {
  const { state: { users }, dispatch } = useContext(StoreContext);

  const fetchData = async () => {
    if (
      !location.search || 
      (users.data.length > 0 && location.search === users.currentSearch)
    ) return;

    dispatch({ type: START_RESULTUSERS, query: location.search });
    const result = await fetch(`${urlGithub}search/users${location.search}`);
    
    if (result) {
      const { items } = await result.json();
      dispatch({ type: SUCCESS_RESULTUSERS, data: items });
    } else {
      dispatch({ type: ERROR_RESULTUSERS, error: 'Erro de servidor' });
    }
  }

  const getTermSearch = () => location.search ? location.search.split("?q=")[1] : null;

  useEffect(() => {
    fetchData();
  }, [location.search]);

  return (
    <Container>
      <h4>Mostrando resultado de busca para <b>"{getTermSearch()}"</b></h4>
      {users.loading ? <Loading /> : (
        <List>
          {users.data.map(item => (
            <User key={item.login} login={item.login} avatarUrl={item.avatar_url} id={item.id} />
          ))}
        </List>
      )}
    </Container>
  )
}


export default Home;