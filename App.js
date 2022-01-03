import React from 'react';

import {View, Text, StyleSheet,
   SafeAreaView, TextInput} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeMap from './src/components/HomeMap';
import VehicleType from './src/components/VehicleTypes'
import VehicleSize from './src/components/VehicleSize';
const App = props => {
  return (
    <SafeAreaView>
     <HomeMap/>
     <VehicleType/>
     
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    height: 40,
    width:300,
    borderWidth:1,
    marginVertical: 15,
    margin:25,
    borderRadius: 8,
  },
});