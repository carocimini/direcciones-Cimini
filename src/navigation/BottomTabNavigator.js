import { StyleSheet, Text, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './TabNavigator';
import TodoListNavigator from './TodoListNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

export default MyTabs = () => {
    return (
    <NavigationContainer>
        <BottomTabs.Navigator initialRouteName="HomeTab" screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar}}>
            <BottomTabs.Screen name="HomeTab" component={TodoListNavigator} options={{tabBarIcon: ({focus}) => (
                <View style={styles.item}>
                    <Ionicons name="home" size={20} color='black'/>
                    <Text>Home</Text>
                </View>
            )}} />
            <BottomTabs.Screen name="ProfileTab" component={TabNavigator} options={{tabBarIcon: ({focus}) => (
                <View style={styles.item}>
                    <Ionicons name="person" size={20} color='black'/>
                    <Text>Perfil</Text>
                </View>
            )}} />
        </BottomTabs.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor:' #7f5Df0',
        shadowOffset: {with:0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 10,
        height: 80,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 15,
    }
})