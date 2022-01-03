import React from "react";

import { View, Text, Pressable } from "react-native";
import VehicleSize from "../VehicleSize";
import typesData from "../../assets/data/types";
const VehicleTypes = (props) => {
  const confirm =()=> {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map((type:{...}) => (
        <VehicleSize type={type}/>
      ))}

      <Pressable onPress={confirm} style={{
        backgroundColor:'black',
        padding:10,
        margin:10,
        alignItems:'center',
      }}>
<Text style={{color:'white', fontWeight:'bold'}}>
Confirm ride
</Text>
      </Pressable>
    </View>
  );
};

export default VehicleTypes;
