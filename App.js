import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    PermanentMarker: require('./src/assets/fonts/PermanentMarker-Regular.ttf'),
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf')
  })

  if(!loaded) {
    return null
  }
  
  return (
    <BottomTabNavigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})
