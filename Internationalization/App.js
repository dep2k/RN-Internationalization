import React from 'react';
import { setUpLanguage } from "./Locale";
import { loadVocabularies} from "./Locale";
import { Localization } from 'expo-localization';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { I18n } from 'aws-amplify';
import { StyleSheet } from 'react-native';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadResources}
          onFinish={ () => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
   
      <View style={styles.container}>
        <Text> {I18n.get("Welcome")} </Text>
      </View>
    );
  }
  
  async loadResources() {
    lang = Localization.locale;
    console.log("Locale Value:",lang);
    loadVocabularies();
    setUpLanguage(lang); 
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