import { createContext, useReducer, useState } from 'react';
import users from '../mocks/MOCK_DATA.json';
import AppReducer from './AppReducer';

// Create InitialState

const initialState = {
  users: users,
};

//  Creating Global Context
export const GlobalContext = createContext(initialState);
// Creating Context Provider Component

export default function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // SEARCH
  const [filterText, setFilterText] = useState('');
  const [key, setKey] = useState('first_name');
  console.log(key)
  const filteredUsers = state.users.filter((u) => u[key].toLowerCase().includes(filterText.toLowerCase().trim()));

  const contextData = {
    state,
    deleteUser,
    createUser,
    updateUser,
    filteredUsers,
    setFilterText,
    setKey
  };
  return (
    <GlobalContext.Provider value={contextData}>
      {props.children}
    </GlobalContext.Provider>
  );
  // CRUD
  // DELETE
  function deleteUser(id) {
    dispatch({
      type: 'DELETE',
      payload: { id: id },
    });
  }
  // CREATE
  function createUser(newUser) {
    dispatch({ type: 'CREATE', payload: { newUser } });
  }
  // UPDATE
  function updateUser(updatedUser) {
    dispatch({ type: 'UPDATE', payload: { updatedUser } });
  }
}
