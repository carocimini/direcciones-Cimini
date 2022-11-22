import CreateListScreen from "../screens/CreateListScreen";
import ListScreen from "../screens/listScreen";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default TodoNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Bienvenida" component={WelcomeScreen} />
                <Stack.Screen name="Creando" component={CreateListScreen} />
                <Stack.Screen name="Lista" component={ListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}