import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

import {Field, reduxForm} from 'redux-form';

const fieldName = (props) => {
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

  return errors;
};

const SignInForm = (props) => {
  return (
    <View>
      <Field name="mail" component={fieldName} ph="mail"/>
      <Field name="password" component={fieldName} ph="password"/>
      <View style={styles.button}>
        <Button
          title="Sign In"
          onPress={props.handleSubmit(props.login)}
        />
      </View>
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
  button: {
    marginBottom: 16,
  },
});

export default reduxForm(
  {
    form: 'SignInForm',
    validate,
  }
)(SignInForm);

