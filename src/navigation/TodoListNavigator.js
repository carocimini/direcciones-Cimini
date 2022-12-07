import CreateListScreen from "../screens/CreateListScreen";
import ListScreen from "../screens/listScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default TodoNavigator = () => {
    return(
            <Stack.Navigator initialRouteName="Bienvenida" screenOptions={{
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: {color: 'white'},
                headerTitleStyle: {fontWeight: "500", fontSize: 30, color: 'white', fontFamily: 'PermanentMarker'}
            }}>
                <Stack.Screen name="Bienvenida" component={WelcomeScreen} options={{title: 'TodayDo',}}/>
                <Stack.Screen name="Creando Lista" component={CreateListScreen} />
                <Stack.Screen name="Lista" component={ListScreen} options={({route}) => ({
                    title: route.params.name
                })} />
            </Stack.Navigator>
    )
}