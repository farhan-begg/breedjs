import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Cell3 from './Cell3';
import { dogs } from '../breeds'
export default function DetailsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={{ width: '100%' }}
                data={dogs}
                renderItem={({ index, item }) => {
                    return <Cell3 item={item} />
                }}
                keyExtractor={item => item.breed} />

            <StatusBar style="auto" />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});