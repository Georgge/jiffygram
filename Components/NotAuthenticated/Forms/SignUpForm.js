import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

import {Field, reduxForm} from 'redux-form';

const fieldName = (props) => {
  console.log(props);
  return (
    <View style={styles.textInput}>
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
        onBlur={props.input.onBlur}
      />
      {props.meta.touched && props.meta.error && 
        <Text style={styles.error}>
          {props.meta.error}
        </Text> 
      }
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'name required';
  } else if (values.name.length < 5) {
    errors.name = '5 characters minimum';
  } else if (values.name.length > 10) {
    errors.name = 'maximum 10 characters';
  }

  if (!values.mail) {
    errors.mail = 'e-mail required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
    errors.mail = 'e-mail invalid';
  }

  if (!values.password) {
    errors.password = 'password required';
  } else if (values.password.length < 5) {
    errors.password = 'minimum 5 characters';
  } else if (values.password.length > 16) {
    errors.password = 'maximum 16 characters';
  }

  if (!values.confirmation) {
    errors.confirmation = 'password required';
  } else if (values.confirmation !== values.password) {
    errors.confirmation = 'password does not match';
  }
  return errors;
};

const SignUpForm = (props) => {
  console.log(props);
  return (
    <View>
      <Field name="name" component={fieldName} ph="name"/>
      <Field name="mail" component={fieldName} ph="mail"/>
      <Field name="password" component={fieldName} ph="password"/>
      <Field name="confirmation" component={fieldName} ph="password confirm"/>
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

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  error: {
    color: '#ef5350',
  },
});

export default reduxForm(
  {
    form: 'SignUpForm',
    validate,
  }
)(SignUpForm);

