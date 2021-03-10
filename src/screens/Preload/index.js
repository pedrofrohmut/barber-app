import React, { useEffect } from "react"
import AsyncStorage from "@react-native-community/async-storage"
import { useNavigation } from "@react-navigation/native"

import BarberLogo from "../../assets/barber.svg"

import { Container, LoadingIcon } from "./styles"

const Preload = () => {
  const navigation = useNavigation()

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token")
    if (token) {
    } else {
      navigation.navigate("SignIn")
    }
  }

  useEffect(() => {
    checkToken()
  }, [])

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  )
}

export default Preload
