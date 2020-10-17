import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./screens/Login";
import Rules from "./screens/Rules";
import Characters from "./screens/characters";
import { createSwitchNavigator, createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
      <StatusBar style="auto" />
    </View>
  
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const switchNavigator = createSwitchNavigator({
  Login:{screen:Login},
  Rules:{screen:Rules},
  Characters:{screen:Characters}
})
const AppContainer = createAppContainer(switchNavigator)