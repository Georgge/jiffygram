import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import SignInForm from './Forms/SignInForm';

class SignIn extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> SignIn </Text>
        <SignInForm />
        <Button
          title='SignUp'
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    );
  }
}

export default SignIn;
