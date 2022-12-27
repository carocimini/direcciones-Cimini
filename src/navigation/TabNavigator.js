import ProfilePicScreen from "../screens/ProfilePicScreen";
import ProfileScreen from "../screens/ProfileScreen";
import colors from "../constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default TabNavigator = () => {
    return(
            <Stack.Navigator initialRouteName="Bienvenida" screenOptions={{
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: {color: 'white'},
                headerTitleStyle: {fontWeight: "500", fontSize: 30, color: 'white', fontFamily: 'PermanentMarker'}
            }}>
                <Stack.Screen name="Perfil" component={ProfileScreen} options={{title: "Perfil"}}/>
                <Stack.Screen name="FotoPerfil" component={ProfilePicScreen} options={{title: "Foto de Perfil"}}/>
            </Stack.Navigator>
    )
}