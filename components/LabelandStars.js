import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function LabelandStars({ text, value }) {
    let stars = '☆'
    for (let i = 1; i < 5; i += 1) {
        if (i < value) {
            stars = stars + '☆'
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{text}</Text>
            <Text style={styles.bar}>
                {stars}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,

    },
    label: {
    },
    bar: {
        textAlign: 'right',
        flex: 1,
    }
})
export default LabelandStars