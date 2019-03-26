import React, { useEffect, useReducer, createContext, useContext } from 'react';
import { urlGithub } from '../../config';
import './Home.scss';
import { StoreContext } from '../../components/Container/StoreContainer';
import Container from '../../components/Container/Container';
import List from '../../components/List/List';
import User from '../../components/User/User';
import Loading from '../../components/Loading/Loading';

const START_RESULTUSERS = 'startResultUsers';
const SUCCESS_RESULTUSERS = 'successResultUsers';
const ERROR_RESULTUSERS = 'errorResultUsers';

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

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
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