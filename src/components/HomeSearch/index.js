import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeSearch = props => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>
      <View style={styles.previousDestination}>
        <View style={styles.iconContaner}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationName}>Spin night club</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
