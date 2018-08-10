import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './Forms/SignUpForm';
import {registerAction, loadSignUpImageAction, cleanSignUpImageAction} from '../../Store/Actions';
import ChoiceImage from '../ChoiceImage';
import CONSTANTS from '../../Store/Constants';

class SignUp extends Component {
  componentWillUnmount() {
    this.props.cleanImage();
  }

  userRegister = (values) => {
    this.props.register(values);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ChoiceImage image={this.props.image.image} load={this.props.loadImage}/>
        <SignUpForm register={this.userRegister} />
        <View style={styles.button}>
          <Button
            title='SignIn'
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  button: {
    marginBottom: 10,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    image: state.imageSingUpReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: (values) => {
      dispatch(registerAction(values));
    },
    loadImage: (values) => {
      dispatch(loadSignUpImageAction(values));
    },
    cleanImage: () => {
      dispatch(cleanSignUpImageAction());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
