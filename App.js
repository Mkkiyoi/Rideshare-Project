import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

// 1) Set up Redux

export default function App() {
  return (
    // Wrap the react native app in a provider to allow for data handling.
    <Provider store={store}> 
      {/* View = Div from react apps, Styles = Classes for CSS like styling */}
      <HomeScreen />
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
