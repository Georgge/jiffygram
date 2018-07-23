import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SignUp extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title='SignIn'
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  }
}

export default SignUp;
