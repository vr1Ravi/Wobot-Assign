import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import RecipeDetail from './screens/RecipeDetail';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="recipedetail" component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
