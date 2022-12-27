import { Button, StyleSheet, Text, View } from 'react-native'

import ImageSelector from '../components/imageSelector'
import React from 'react'

const ProfilePicScreen = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate("Perfil")
    }
    
    return (
        <View style={styles.container}>
        <Text>Imagen de Perfil</Text>
        <ImageSelector onImage={image => console.log(image)}/>
        <Button title="Grabar Imagen" onPress={handleSave}></Button>
        </View>
    )
}

export default ProfilePicScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    }
})