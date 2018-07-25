import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import {Field, reduxForm} from 'redux-form';

const fieldName = (props) => {
  return (
    <TextInput
      placeholder="From fieldName"
      onChangeText={props.input.onChange}
      value={props.input.value}
    />
  );
};

const SignUpForm = (props) => {
  console.log(props);
  return (
    <View>
      <Field name="name" component={fieldName} />
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

