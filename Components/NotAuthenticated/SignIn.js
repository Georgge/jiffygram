import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import SignInForm from './Forms/SignInForm';

class SignIn extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default SignIn;
