import React from 'react';
import { StyleSheet, NavigationContainer, View, SafeAreaView, ScrollView } from 'react-native';
import Cell from './components/Cell';
import Cell2 from './components/Cell2';
export default function App() {

  return (


    <ScrollView>
      <Cell />
    </ScrollView>




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
