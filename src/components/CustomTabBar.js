import React, { useContext } from "react"
import styled from "styled-components/native"

import { UserContext } from "../contexts/UserContext"

import HomeIcon from "../assets/home.svg"
import SearchIcon from "../assets/search.svg"
import TodayIcon from "../assets/today.svg"
import FavoriteIcon from "../assets/favorite.svg"
import AccounIcon from "../assets/account.svg"

const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
`

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4eadbe;
  margin-top: -20px;
`

const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`

const CustomTabBar = ({ state, navigation }) => {
  const { state: user } = useContext(UserContext)

  const goTo = (screenName) => navigation.navigate(screenName)

  const isFocused = (index) => state.index === index

  const iconStyle = ({ index }) => ({ opacity: isFocused(index) ? 1 : 0.7 })

  return (
    <TabArea>
      <TabItem
        onPress={() => {
          goTo("Home")
        }}
      >
        <HomeIcon style={iconStyle({ index: 0 })} width="24" height="24" fill="#fff" />
      </TabItem>
      <TabItem
        onPress={() => {
          goTo("Search")
        }}
      >
        <SearchIcon style={iconStyle({ index: 1 })} width="24" height="24" fill="#fff" />
      </TabItem>
      <TabItemCenter
        onPress={() => {
          goTo("Appointments")
        }}
      >
        <TodayIcon width="32" height="32" fill="#4eadbe" />
      </TabItemCenter>
      <TabItem
        onPress={() => {
          goTo("Favorites")
        }}
      >
        <FavoriteIcon style={iconStyle({ index: 3 })} width="24" height="24" fill="#fff" />
      </TabItem>
      <TabItem
        onPress={() => {
          goTo("Profile")
        }}
      >
        {user && user.avatar !== "" ? (
          <AvatarIcon source={{ uri: user.avatar }} />
        ) : (
          <AccounIcon style={iconStyle({ index: 4 })} width="24" height="24" fill="#fff" />
        )}
      </TabItem>
    </TabArea>
  )
}

export default CustomTabBar
