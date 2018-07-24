import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import {Field, reduxForm} from 'redux-form';

const fieldName = () => {
  return (
    <TextInput
      placeholder="From fieldName"
    />
  );
};

const SignUpForm = () => {
  return (
    <View>
      <Field name="name" component={fieldName} />
      <Text>Redux Form</Text>
    </View>
  );
};

export default reduxForm(
  {
    form: 'SignUpForm',
  }
)(SignUpForm);

