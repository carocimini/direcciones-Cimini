import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/card'
import Lista from '../components/lista'
import colors from '../constants/colors'

const WelcomeScreen = ({navigation}) => {
    const [listsExist, setListsExist] = useState(false)
    const screenName = 'createList'

    const renderList = ({item}) => (
        <View>
            <Card>
                <Text style={styles.subtitulo}>{item.name}</Text>
                <TouchableOpacity style={styles.buttoncheck} onPress={() => completItem(item.id, item.name)}>
                    <Text style={{color:"white"}}>Abrir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonlista} onPress={() => selectedItem(item.id)}>
                    <Text style={{color:"white"}}>X</Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
    
    return (
    <View style={styles.screen}>
        <Text style={styles.titulo}>Bienvenid@!</Text>
        <Text style={styles.titulo}>Mis Listas:</Text>
        <View style={styles.subContainer}>
            <Text style={styles.subtitulo}>Aun no tienes listas...</Text>
        </View>
        <Card newStyles={{marginBottom: 50}}>
            <Pressable style={styles.createButton} onPress={() => navigation.navigate("Creando Lista")}>
                <Text>Crear Lista</Text>
            </Pressable>
        </Card>
    </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    subContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 5,
        marginTop: 0,
    },
    titulo:{
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 20,
        color: colors.primary,
    },
    subtitulo: {
        fontSize: 15,
        width: "80%",
    },
    createButton: {
        backgroundColor: colors.confirm,
        height: 35,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
})