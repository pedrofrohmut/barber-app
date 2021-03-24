import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: #63c2d1;
`

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: 700;
  color: #f3f3f3;
`

export const SearchButtom = styled.TouchableOpacity`
  height: 26px;
  width: 26px;
`

export const LocationArea = styled.View`
  background-color: #4eadbe;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`

export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
`

export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`
