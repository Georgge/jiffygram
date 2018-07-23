import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

class SignUp extends Component {
  render() {
    const {navigation} = this.props;
    console.log(this.props.number);
    return (
      <View>
        <Text> SignUp </Text>
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
