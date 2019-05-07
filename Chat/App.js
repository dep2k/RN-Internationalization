import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import NavigationService from "./src/Navigation/NavigationService";
import AppStackNavigator from "./src/Navigation/AppStackNavigator";
const TopLevelNavigator = AppStackNavigator;

export default class App extends React.Component {

  render() {

    return (
      <TopLevelNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
