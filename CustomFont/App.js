import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

// You can import from local files


export default class App extends React.Component {
 
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await this.loadFonts();
  }

  loadFonts = async () => { 
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  render() {
  
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (<Text style={{ fontFamily: 'open-sans-bold', fontSize: 30 }}>
          Hello, world!
        </Text>) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  }
});