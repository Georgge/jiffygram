import React from 'react';
import {Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

const SignIn = (props) => {
  const {navigation} = props;
  return (
    <View>
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
    <View>
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

export {UnauthenticatedRoutes};
