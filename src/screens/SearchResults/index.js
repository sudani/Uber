import React from 'react';

import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import VehicleTypes from '../../components/VehicleTypes';

const SearchResults = props => {
  return (
    
    <View>
     <HomeMap/>
     <VehicleTypes/>
    </View>
    
  );
};

export default SearchResults;
