import {
  StyleSheet,
  View,
} from "react-native"

import CreateListScreen from "./src/screens/CreateListScreen";
import Header from "./src/components/Header";
import ListScreen from "./src/screens/listScreen";
import TodoNavigator from "./src/navigation/TodoListNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen"
import colors from "./src/constants/colors";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    PermanentMarker: require('./src/assets/fonts/PermanentMarker-Regular.ttf'),
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf')
  })
  
  const [listName, setListName] = useState('')
  const [selectScreen, setSelectScreen] = useState('')
  const [menuList, setMenuList] = useState([])

  const handleStartList = (selectedName) => {
    setListName(selectedName)
  }

  const handleScreen = (screenName) => {
    setSelectScreen(screenName)
  }

  const handleSaveList = (completList) => {
    setMenuList((currentState) => [
      ...currentState, {...completList},
    ])
    setSelectScreen('home')
  }

  if(!loaded) {
    return null
  }
  
  return (
    <TodoNavigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})
