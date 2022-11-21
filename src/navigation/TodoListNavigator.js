import CreateListScreen from "../screens/CreateListScreen";
import ListScreen from "../screens/listScreen";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigat()

const TodoListNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen />
            </Stack.Navigator>
        </NavigationContainer>
    )
}