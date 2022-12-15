import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import store from "./src/store";
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
    <Provider store={store}>
      <BottomTabNavigator/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})
