import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import {Field, reduxForm} from 'redux-form';

const fieldName = (props) => {
  console.log(props);
  return (
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={
        props.input.name === 'mail'? 'email-address': 'default'
      }
      autoCapitalize='none'
      secureTextEntry={
        !!(props.input.name === 'password' || props.input.name === 'confirmation')
      }
    />
  );
};

const SignUpForm = (props) => {
  console.log(props);
  return (
    <View>
      <Field name="name" component={fieldName} ph="name"/>
      <Field name="mail" component={fieldName} ph="mail"/>
      <Field name="password" component={fieldName} ph="password"/>
      <Field name="confirmation" component={fieldName} ph="password confirm"/>
      <Text>Redux Form</Text>
      <Button
        title="Register"
        onPress={
          props.handleSubmit((values) => {
            console.log(values);
          })
        }
      />
    </View>
  );
};

export default reduxForm(
  {
    form: 'SignUpForm',
  }
)(SignUpForm);

