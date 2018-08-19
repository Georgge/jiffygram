import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Field, reduxForm} from 'redux-form';

const fieldComment = props => {
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType='default'
        autoCapitalize='none'
        onBlur={props.input.onBlur}
        multiline
      />
      {props.meta.touched && props.meta.error &&
        <Text style={styles.error}>{props.meta.error}</Text>
      }
    </View>
  );
};

const fieldImage = props => {
  return (
    <View>
      {
        props.meta.touched && props.meta.error &&
        <Text style={styles.error}>{props.meta.error}</Text>
      }
    </View>
  );
};

const validate = (values, props) => {
  const errors = {};
  if (!props.image) {
    errors.image = 'image required';
  }
  if (values.comment && values.comment.length > 140) {
    errors.comment = 'maximum 140 characters';
  }

  return errors;
};

const GalleryChoiceForm = (props) => {
  return (
    <View style={styles.pad}>
      <Field name='image' component={fieldImage} />
      <Field name="comment" component={fieldComment} ph="Image comment" />
      <View style={styles.button}>
        <Button
          title="Register"
          onPress={
            props.handleSubmit(props.register)
          }
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
    marginBottom: 10,
  },
  pad: {
    paddingHorizontal: 10,
  },
});

export default reduxForm(
  {
    form: 'GalleryChoiceForm',
    validate,
  }
)(GalleryChoiceForm);
