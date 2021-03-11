import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import BarberLogo from "../../assets/barber.svg"
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

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

  const onCustomButtonPress = () => {

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
