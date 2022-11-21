import {
  StyleSheet,
  View,
} from "react-native"

import CreateListScreen from "./src/screens/CreateListScreen";
import Header from "./src/components/Header";
import ListScreen from "./src/screens/listScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen"
import colors from "./src/constants/colors";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    PermanentMarker: require('./src/assets/fonts/PermanentMarker-Regular.ttf')
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
    console.log(menuList)
  }

  let content = <WelcomeScreen onWelcome={handleScreen} menuList={menuList}/>
  
  if(selectScreen === 'home') {
    content = <WelcomeScreen onWelcome={handleScreen} menuList={menuList}/>
  }

  if(selectScreen === 'createList') {
    content = <CreateListScreen onStartApp={handleStartList}/>
  }
  
  if (listName) {
    content = <ListScreen onSaveList={handleSaveList} listName={listName}/>
  }

  if(!loaded) {
    return null
  }
  
  return (
    <View style={styles.container}>
      <Header title={"TodayDo"} newStyles={{fontFamily: 'PermanentMarker'}}/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})
