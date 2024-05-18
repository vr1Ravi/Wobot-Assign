import { StyleSheet, FlatList, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import Recipe from '../components/Recipe';
import { fetchRecipes } from '../api';
import Loader from '../components/Loader';
import ServerErr from '../components/ServerErr';

const Main = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    getRecipes();
  }, []);
  async function getRecipes() {
    setRecipes([]);
    setErr(null);
    setLoading(true);
    const data = await fetchRecipes(searchQuery);
    setSearchQuery('');
    setLoading(false);

    if (data) {
      setRecipes(data);
    } else {
      setErr(true);
    }
  }

  if (isLoading) return <Loader />;
  if (err) return <ServerErr />;

  return (
    <View style={styles.main}>
      <Searchbar
        placeholder="Search..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        iconColor="#3E5481"
        placeholderTextColor={'#9FA5C0'}
        onSubmitEditing={getRecipes}
      />

      {recipes.length ? (
        <FlatList
          contentContainerStyle={styles.section}
          numColumns={2}
          data={recipes}
          renderItem={({ item }) => (
            <Recipe
              imgurl={item.image}
              brief={item.title}
              id={item.id}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ gap: 10 }}
        />
      ) : (
        <View style={styles.div}>
          <Text>No Recipes Found (;</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  searchBar: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: '#F4F5F7',
    color: '#9FA5C0',
  },
  section: {
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 5,
    gap: 10,
    paddingBottom: 150,
  },
  div: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Home = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};
export default Home;
