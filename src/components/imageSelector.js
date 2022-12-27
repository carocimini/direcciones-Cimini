import * as ImagePicker from 'expo-image-picker'

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

import colors from '../constants/colors'

//import * as Permissions from 'expo-permissions'

const ImageSelector = () => {
    const [pickedUri, setPickedUri] = useState()
    const verifyPermissions = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if(status !== 'granted'){
            Alert.alert(
                "Permisos insuficientes",
                "Necesita dar permisos a la camara para usar la aplicación"
                [{text: 'OK'}]
            )
            return false
        }
        return true
    }
    
    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if(!isCameraOk) return
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })
        setPickedUri(image.uri)
        props.onImage(image.uri)
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (<Text>No hay imagen seleccionada</Text>) : (<Image source={{uri: pickedUri}} style={styles.image}></Image>)}
            </View>
            <Button title='Tomar foto' onPress={handlerTakeImage}></Button>
        </View>
    )
    
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})