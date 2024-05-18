import { View, Text, Platform, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';

const SafeAreaViewAndroid = ({ Component, ...rest }) => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Component {...rest} />
      </SafeAreaView>
    </View>
  );
};

export default SafeAreaViewAndroid;
