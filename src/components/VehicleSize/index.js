import React from 'react';

import {View, Text, Image} from 'react-native';
import styles from './styles';

const VehicleSize = props => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../assets/images/UberX.jpeg')}
      />
      <View style={styles.middleContainer}></View>
      <View style={styles.rightContainer}></View>
    </View>
  );
};

export default VehicleSize;
