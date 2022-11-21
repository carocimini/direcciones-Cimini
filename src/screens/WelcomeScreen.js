import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/card'
import Lista from '../components/lista'
import colors from '../constants/colors'

const WelcomeScreen = ({onWelcome}, props) => {
    const {menuList} = props
    const [listsExist, setListsExist] = useState(false)
    const screenName = 'createList'
    
    if(menuList < 1) {
        setListsExist(true)
    }

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
        {listsExist && (
            <Lista list={menuList} renderItem={renderList}/>
        )} 
        <Card>
            <Pressable style={styles.createButton} onPress={() => onWelcome(screenName)}>
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