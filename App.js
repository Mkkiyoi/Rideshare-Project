import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

// 1) Set up Redux

export default function App() {
  return (
    // Wrap the react native app in a provider to allow for data handling.
    <Provider store={}> 
      {/* View = Div from react apps, Styles = Classes for CSS like styling */}
      <View style={styles.container}>
        <Text>Let's build a Rideshare App</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
