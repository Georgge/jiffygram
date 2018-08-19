import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {blur} from 'redux-form';
import ChoiceImage from '../ChoiceImage';
import {loadAddImageAction} from '../../Store/Actions';
import GalleryChoiceForm from './Forms/GalleryChoiceForm';


class GaleryChoice extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <ChoiceImage image={this.props.image.image}
            load={this.props.takeImage}
            radius />
        </View>
        <View style={styles.text}>
          <GalleryChoiceForm image={this.props.image.image}
            register={(values) =>{
              console.log(values);
            }} />
        </View>
        <View style={styles.button}>
          <Button
            title='Post'
            onPress={() => {
              console.log('post');
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.imageAddReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    takeImage: (image) => {
      dispatch(loadAddImageAction(image));
      dispatch(blur('GalleryChoiceForm', 'image', Date.now()));
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 2,
  },
  text: {
    flex: 2,
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GaleryChoice);
