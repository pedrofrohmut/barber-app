import React, { useState, useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage"

import BarberLogo from "../../assets/barber.svg"
import PersonIcon from "../../assets/person.svg"
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

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { dispatch: userDispatch } = useContext(UserContext)

  const navigation = useNavigation()

  const onCustomButtonPress = async () => {
    if (name === "" || email === "" || password === "") {
      alert("Preencha nome, email e senha")
      return
    }
    let response = null
    try {
      response = await Api.signUp({ name, email, password })
    } catch (err) {
      alert(`Erro ao cadastrar usuario: ${err}`)
      return
    }
    setName("")
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
      routes: [{ name: "SignIn" }]
    })
  }

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={onSignMessageButtonPress}>
        <SignMessageButtonText>Ja possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}

export default SignUp
