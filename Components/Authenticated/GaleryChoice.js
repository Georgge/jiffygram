import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {blur} from 'redux-form';
import ChoiceImage from '../ChoiceImage';
import {loadAddImageAction, uploadPostAction} from '../../Store/Actions';
import {cleanAddImageAction} from '../../Store/Actions';
import GalleryChoiceForm from './Forms/GalleryChoiceForm';


class GaleryChoice extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }

  componentWillUnmount() {
    this.props.cleanImage();
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
              this.props.uploadPost(values);
              console.log(values);
            }} />
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
    uploadPost: (values) => {
      dispatch(uploadPostAction(values));
    },
    cleanImage: (cl) => {
      dispatch(cleanAddImageAction());
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GaleryChoice);
