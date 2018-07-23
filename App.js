import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UnauthenticatedRoutes} from './Components/NotAuthenticated/UnauthenticatedRoutes';
import {AuthenticatedRoutes} from './Components/Authenticated/AuthenticatedRoutes';
import {Provider} from 'react-redux';
import Store from './Store/Store';

/**
 * Main class
 */
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <UnauthenticatedRoutes />
        </Provider>
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
