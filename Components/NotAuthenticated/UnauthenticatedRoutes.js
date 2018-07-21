import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';

const SignIn = (props) => {
  const {navigation} = props;
  return (
    <View style={ styles.container }>
      <Text>Component SignIn</Text>
      <Button
        title="Go SignUp"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};
const SignUp = (props) => {
  const {navigation} = props;
  return (
    <View style={ styles.container }>
      <Text>Component SignUp</Text>
      <Button
        title="Go SignIn"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

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
