import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import colors from '../constants/colors'

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.titulo}>Mi Cuenta</Text>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.options}>
            <Text><Ionicons name="book-outline" size={20} color='black'/>  Mis Datos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
            <Text><Ionicons name="construct-outline" size={20} color='black'/>  Soporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
            <Text><Ionicons name="exit-outline" size={20} color='black'/>  Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 75,
    },
    subContainer: {
        flex: 1,
        top: 25,
    },
    options: {
        position:'relative',
        height: 40,
        right: 100,
    },
    titulo:{
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 20,
        color: colors.primary,
    },
    subtitulo: {
        fontSize: 20,
    },

})