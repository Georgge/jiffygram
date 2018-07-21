import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UnauthenticatedRoutes} from './Components/NotAuthenticated/UnauthenticatedRoutes';

/**
 * Main class
 */
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UnauthenticatedRoutes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
