import React, {PureComponent} from 'react';

import {View, Text, StyleSheet} from 'react-native';
const LocationItem =(props) => {
  return (
    <View style={styles.root}>
      <Text>{props.description}xxx</Text>
      <Text>addresses</Text>
    </View>
  );
};
const styles = StyleSheet.create ({
    root:{
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
    }
})
export default (LocationItem);
