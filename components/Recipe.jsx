import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Recipe = ({ imgurl, brief, id, navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('recipedetail', {
          id: id,
        })
      }
    >
      <View style={[styles.recipeCard, styles.shadow]}>
        <Image source={{ uri: imgurl }} style={styles.recipeImg} />
        <Text style={styles.text}>{brief.substr(0, 35)}...</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  recipeCard: {
    backgroundColor: 'white',
    borderEndEndRadius: 25,
    gap: 10,
    height: 220,
    width: 180,
    borderRadius: 10,
    elevation: 1,
    marginBottom: 10,
  },
  recipeImg: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    height: 150,
    width: '100%',
    alignSelf: 'center',
  },
  text: {
    color: '#3E5481',
    alignSelf: 'start',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 2,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default Recipe;
