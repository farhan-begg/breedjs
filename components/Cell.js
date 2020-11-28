import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { dogs } from '../breeds'
export default function Cell2() {
    return (
        <SafeAreaView  >
            <FlatList style={styles.container}
                data={dogs}
                renderItem={({ item }) => {
                    return <Text>{item.breed}</Text>
                }}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        color: 'white'


    },
});
