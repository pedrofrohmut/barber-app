import React from "react"
import { NavigationContainer } from "@react-navigation/native"

import MainStack from "./stacks/MainStack"
import UserContextProvider from "./contexts/UserContext"

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}

export default App
