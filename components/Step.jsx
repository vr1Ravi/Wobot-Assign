import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import NotFoundImg from '../assets/404.png';

const Step = ({ name = '', count = 0, ingredients = [] }) => {
  return (
    <View style={styles.step}>
      <View style={{ paddingLeft: 35 }}>
        <View style={styles.stepCount}>
          <Text style={{ color: 'white', alignSelf: 'center' }}>{count}</Text>
        </View>
        <Text style={{ fontSize: 15, color: '#2E3E5C' }}>{name}</Text>
      </View>
      <View style={styles.ingredientsImg}>
        {ingredients?.map((ingredient) => (
          <Image
            source={ingredient.image ? { uri: ingredient.image } : NotFoundImg}
            style={{ height: 30, width: 30, borderRadius: 15 }}
            alt="ing-img"
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  step: {
    position: 'relative',
    marginBottom: 35,
  },
  stepCount: {
    position: 'absolute',
    backgroundColor: '#2E3E5C',
    width: 24,
    height: 24,
    borderRadius: 12.5,
    padding: 1,
  },
  ingredientsImg: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 7,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingLeft: 35,
  },
});

export default Step;
