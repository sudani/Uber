import React from 'react';

import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const VehicleSize = props => {
  const {type} = props;

  const getImage =() => {
    if(type.type == 'UberX'){
      return require('../../assets/images/UberX.jpeg')
    }
    if(type.type == 'Comfort'){
      return require('../../assets/images/Comfort.jpeg')
      
    }
    if(type.type == 'UberXL'){
      return require('../../assets/images/UberXL.jpeg')
    }
    
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={getImage()}
      />
     
      <View style={styles.midContainer}>
        <Text style={styles.vehicleType}>
           {type.type}
          <Ionicons name={'person'} size={12}/>
         {type.size}
        </Text>
        <Text style={styles.timeStamp}>
          8:30 PM
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} 
        color={'#61cf8e'}/>
        <Text style={styles.price}>est ${type.price}</Text>
      </View>
    </View>
  );
};

export default VehicleSize;
