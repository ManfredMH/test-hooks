import React, { useReducer, createContext } from "react"
import {reducer, initialState} from "../reducers/SessionStore"

const Context = createContext();

const SessionStore = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      {children}
    </Context.Provider>
  );
}


export { SessionStore, Context };