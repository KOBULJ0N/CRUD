import React, { createContext, useReducer, useState } from "react";
import users from "../mocks/MOCK_DATA.json";
import AppReducer from "./AppReducer";

// initialState
const initialState = { 
  users 
};
// createContext
export const GlobalContext = createContext(initialState);

// Provider Component
export default function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //! READ
  const [filterText, setFilterText] = useState("");
  const [selectValue, setSelectValue] = useState("first_name");
  const filteredUsers = state.users.filter((user) =>
    user[selectValue].toLowerCase().includes(filterText.toLowerCase().trim())
  );

  const contextData = {state, filteredUsers, setFilterText, setSelectValue,  createUser, updateUser, deleteUser}
  return (
    <>
      <GlobalContext.Provider value={contextData}>{children}</GlobalContext.Provider>
    </>
  );
  //! CREATE
  function createUser(newUser) {
    dispatch({
      type: "CREATE_USER",
      payload: {newUser: newUser}
    });
  }
  function updateUser(updatedUser) {
    dispatch({
      type: "UPDATE_USER",
      payload: {updatedUser: updatedUser}
    });
  }
  function deleteUser(id) {
    dispatch({
      type: "DELETE_USER",
      payload: {id: id}
    });
  }
}
