import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SignInForm from './Forms/SignInForm';
import { loginAction } from '../../Store/Actions';

class SignIn extends Component {
  userSignIn = (values) => {
    console.log(values);
    this.props.login(values);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.userSignIn} />
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

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (values) => {
      dispatch(loginAction(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
