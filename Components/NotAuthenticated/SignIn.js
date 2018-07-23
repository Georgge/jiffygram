import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class SignIn extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> textInComponent </Text>
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
