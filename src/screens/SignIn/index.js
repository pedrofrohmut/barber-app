import React, { useState, useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage"

import BarberLogo from "../../assets/barber.svg"
import EmailIcon from "../../assets/email.svg"
import LockIcon from "../../assets/lock.svg"

import Api from "../../Api"
import SignInput from "../../components/SignInput"
import { UserContext } from "../../contexts/UserContext"

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from "./styles"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { dispatch: userDispatch } = useContext(UserContext)

  const navigation = useNavigation()

  const onCustomButtonPress = async () => {
    if (email === "" || password === "") {
      alert("Preencha email e senha")
      return
    }
    let response = null
    try {
      response = await Api.signIn({ email, password })
    } catch (err) {
      alert(`Erro ao autenticar usuario: ${err}`)
      return
    }
    setEmail("")
    setPassword("")
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

  const onSignMessageButtonPress = () => {
    // navigate without possible come back
    navigation.reset({
      routes: [{ name: "SignUp" }]
    })
  }

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          isPassword={true}
        />
        <CustomButton onPress={onCustomButtonPress}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={onSignMessageButtonPress}>
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastra-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}

export default SignIn
