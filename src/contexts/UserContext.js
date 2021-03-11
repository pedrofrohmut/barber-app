import React, { createContext, useReducer } from "react"
import { userReducer, initialState } from "../reducers/UserReducer"

export const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
}

export default UserContextProvider
