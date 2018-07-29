import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './Forms/SignUpForm';

class SignUp extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SignUpForm />
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
    dispatch1: () => {
      //dispatch(actionCreator);
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
