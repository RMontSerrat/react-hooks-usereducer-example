import React, { useReducer, createContext } from 'react';

const START_RESULTUSERS = 'startResultUsers';
const SUCCESS_RESULTUSERS = 'successResultUsers';
const ERROR_RESULTUSERS = 'errorResultUsers';
const START_RESULT_REPOSITORIES = 'startResultRepositories';
const SUCCESS_RESULT_REPOSITORIES = 'successResultRepositories';
const ERROR_RESULT_REPOSITORIES = 'errorResultRepositories';

const initialState = {
  repositories: {
    data: [],
    loading: false,
    error: false,
    currentSearch: null,
  },
  users: {
    data: [],
    loading: false,
    error: false,
    currentUser: null,
  }
}

export const StoreContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case START_RESULTUSERS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
          currentSearch: action.query,
        }
      };
    case SUCCESS_RESULTUSERS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          data: action.data,
        }
      };
    case ERROR_RESULTUSERS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: action.error,
        }
      };
    case START_RESULT_REPOSITORIES:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          loading: true,
        }
      };
    case SUCCESS_RESULT_REPOSITORIES:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          loading: false,
          data: action.data,
        }
      };
    case ERROR_RESULT_REPOSITORIES:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          loading: false,
          error: action.error,
        }
      };

    default:
      throw new Error();
  }
}

export const StoreContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}