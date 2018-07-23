import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

const UnauthenticatedRoutes = StackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export {UnauthenticatedRoutes};
