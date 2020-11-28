import React, { lazy } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import LabelandStars from './LabelandStars'

function Cell3({ item }) {
    const keys = Object.keys(item)
    const breed = item.breed

    const features = keys.filter(key => key !== 'breed').map((key, i) => {
        return <LabelandStars key={i} text={`${key} ${item[key]}`} value={item[key]} />
    })
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>{breed}</Text>
            {features}
        </View>
    )
}

export default Cell3
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'


    },
    h1: {
        fontSize: 20,
        color: 'black',
    }

})