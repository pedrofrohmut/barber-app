import React, { useEffect, useState } from "react"
import { Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { request, PERMISSIONS } from "react-native-permissions"
import Geolocation from "@react-native-community/geolocation"

import Api from "../../Api"

import SearchIcon from "../../assets/search.svg"
import MyLocationIcon from "../../assets/my_location.svg"

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButtom,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon
} from "./styles"

const Home = () => {
  const [location, setLocation] = useState("")
  const [coords, setCoords] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [barbers, setBarbers] = useState([])

  const navigation = useNavigation()

  const getBarbers = async () => {
    console.log("getBarbers()")
    setIsLoading(true)
    setBarbers([])
    try {
      const response = await Api.getBarbers()
      setBarbers(response.data)
    } catch (err) {
      alert("Erro ao listar barbeiros")
    }
    setIsLoading(false)
  }

  const handleLocationFinder = async () => {
    setCoords(null)
    const permission =
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    let result = await request(permission)
    if (result !== "granted") {
      return
    }
    setIsLoading(true)
    setLocation("")
    setBarbers([])
    Geolocation.getCurrentPosition((info) => {
      setCoords(info.coords)
      getBarbers()
    })
  }

  useEffect(() => {
    getBarbers()
  }, [])

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
          <SearchButtom onPress={() => navigation.navigate("Search")}>
            <SearchIcon width="26" height="26" fill="#fff" />
          </SearchButtom>
        </HeaderArea>
        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#fff"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#fff" />
          </LocationFinder>
        </LocationArea>
        {isLoading && <LoadingIcon size="large" color="#fff" />}
      </Scroller>
    </Container>
  )
}

export default Home
