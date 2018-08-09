import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './Forms/SignUpForm';
import {registerAction} from '../../Store/Actions';
import ChoiceImage from '../ChoiceImage';

class SignUp extends Component {
  userRegister = (values) => {
    this.props.register(values);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ChoiceImage />
        <SignUpForm register={this.userRegister} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    number: state.reducerTest,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: (values) => {
      dispatch(registerAction(values));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
