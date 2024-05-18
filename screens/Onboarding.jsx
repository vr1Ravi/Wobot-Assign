import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import OnboardingImg from '../assets/Onboarding.png';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';

const Main = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Image
        source={OnboardingImg}
        style={{
          alignSelf: 'center',
          marginTop: 30,
        }}
      />
      <View style={styles.div}>
        <Text style={styles.heading}>Start Cooking</Text>
        <Text style={{ color: '#9FA5C0', width: '50%', textAlign: 'center' }}>
          Let’s join our community to cook better food!
        </Text>
        <Button
          onPress={() => navigation.navigate('home')}
          textColor="white"
          style={{
            backgroundColor: '#1FCC79',
            width: '80%',
            marginHorizontal: 'auto',
            marginTop: 20,
          }}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  div: {
    alignItems: 'center',
    paddingVertical: 10,
    height: 200,
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'heavy',
  },
});

const Onboarding = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};
export default Onboarding;
