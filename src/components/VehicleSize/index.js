import React from 'react';

import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const VehicleSize = props => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../assets/images/UberX.jpeg')}
      />
      <View style={styles.middleContainer}></View>
      <View style={styles.rightContainer}>
        <Text style={styles.vehicleType}>
          Uber X
          <Ionicons name={'person'} size={12}/>
        </Text>
      </View>
    </View>
  );
};

export default VehicleSize;
