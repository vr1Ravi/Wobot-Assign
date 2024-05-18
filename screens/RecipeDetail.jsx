import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import Ingredient from '../components/Ingredient';
import Step from '../components/Step';
import { fetchRecipeDetail } from '../api';
import Loader from '../components/Loader';
import ServerErr from '../components/ServerErr';

const Main = ({ id }) => {
  const [err, setErr] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});
  useEffect(() => {
    getRecipeDetail();
  }, []);
  async function getRecipeDetail() {
    setLoading(true);
    const data = await fetchRecipeDetail(id);
    if (data) {
      setLoading(false);
      setDetail(data);
    } else {
      setErr(true);
    }
  }

  if (isLoading) return <Loader />;
  if (err) return <ServerErr />;

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.recipeImageBox}>
          <Text style={styles.recipeName}>{detail?.title}</Text>
          <Image source={{ uri: detail?.image }} style={styles.heroImg} />

          <View style={styles.ingredientsBox}>
            <Text style={{ fontSize: 17, color: '#3E5481', marginBottom: 20 }}>
              Ingredients
            </Text>
            {detail?.extendedIngredients?.map((ingredient) => (
              <Ingredient key={ingredient.id} name={ingredient.name} />
            ))}
          </View>
          <View style={{ height: 1, backgroundColor: 'grey' }}></View>

          <View style={styles.stepsBox}>
            <Text style={{ fontSize: 17, color: '#3E5481', marginBottom: 20 }}>
              Steps
            </Text>
            {detail?.analyzedInstructions &&
              detail.analyzedInstructions[0].steps.map((step) => (
                <Step
                  key={step.step}
                  name={step.step}
                  count={step.number}
                  ingredients={step.ingredients}
                />
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  recipeImageBox: {
    marginTop: 20,
  },
  recipeName: {
    fontSize: 20,
    fontWeight: 'heavy',
    color: '#3E5481',
  },
  ingredientsBox: {
    marginTop: 10,
    marginBottom: 20,
  },
  stepsBox: {
    marginTop: 20,
  },
  heroImg: {
    alignSelf: 'center',
    marginTop: 30,
    height: 150,
    width: 150,
    backgroundColor: 'transparent',
    borderRadius: 75,
  },
});
const RecipeDetail = ({ navigation, route }) => {
  return (
    <SafeAreaViewAndroid
      Component={Main}
      navigation={navigation}
      id={route.params.id}
    />
  );
};

export default RecipeDetail;
