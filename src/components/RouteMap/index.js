import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import cars from "../../assets/data/cars";
import MapViewDirections from 'react-native-maps-directions';
import GOOGLE_MAPS_APIKEY from '../../../key'


const RouteMap = (props) => {
const origin ={
  latitude: 28.450627,
  longitude:-16.263045,
}
const destination ={
  latitude: 28.460127,
  longitude:-16.269045,
}
  console.log(cars);
  return (
    <View
      style={{
        height: 300,
        backgroundColor: "#a0abff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
       
       <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={5}
    strokeColor="grey"
  />
  <Marker 
  coordinate={origin}
  title={'origin'}
  />
  <Marker 
  coordinate={destination}
  title={'Destination'}
  />
      </MapView>
    </View>
  );
};

export default RouteMap;
