import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const GridItem = ({item, onSelected}) => {
    return (
        <View style = {styles.gridItem}>
            <TouchableOpacity style = {{...styles.container, backgroundColor: item.color}} onPress={() => onSelected(item)}>
                <View>
                    <Text style = {styles.title}>Lista: {item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 10,
        height: 110,
        width: 300,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 8,
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: "500",
        fontSize: 18,
    }
})