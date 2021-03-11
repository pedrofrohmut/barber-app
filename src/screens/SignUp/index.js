import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import BarberLogo from "../../assets/barber.svg"
import PersonIcon from "../../assets/person.svg"
import EmailIcon from "../../assets/email.svg"
import LockIcon from "../../assets/lock.svg"

import SignInput from "../../components/SignInput"

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
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

  const onCustomButtonPress = () => {

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
          value={nome}
          onChangeText={(text) => setNome(text)}
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
