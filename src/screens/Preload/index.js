import React, { useEffect, useContext } from "react"
import AsyncStorage from "@react-native-community/async-storage"
import { useNavigation } from "@react-navigation/native"

import BarberLogo from "../../assets/barber.svg"

import Api from "../../Api"
import { UserContext } from "../../contexts/UserContext"

import { Container, LoadingIcon } from "./styles"

const Preload = () => {
  const { dispatch: userDispatch } = useContext(UserContext)

  const navigation = useNavigation()

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token")
    if (!token) {
      navigation.navigate("SignIn")
      return
    }
    const response = await Api.checkToken({ token })
    if (!response || !response.token) {
      navigation.navigate("SignIn")
      return
    }
    await AsyncStorage.setItem("token", response.token)
    userDispatch({
      type: "SET_AVATAR",
      payload: {
        avatar: response.data.avatar
      }
    })
    navigation.reset({
      routes: [{ name: "MainTab" }]
    })
  }

  useEffect(() => {
    checkToken()
  })

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  )
}

export default Preload
