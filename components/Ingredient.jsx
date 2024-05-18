import { View, Text, Image } from 'react-native';
import React from 'react';
import checkIcon from '../assets/Check.png';
const Ingredient = ({ name }) => {
  return (
    <View>
      <Text style={{ fontSize: 15, color: '#2E3E5C', marginBottom: 20 }}>
        <Image source={checkIcon} /> {name}
      </Text>
    </View>
  );
};

export default Ingredient;
