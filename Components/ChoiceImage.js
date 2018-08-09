import React from 'react';
import {Button, Image, View, TouchableOpacity} from 'react-native';
import {ImagePicker} from 'expo';

export default class ChoiceImage extends React.Component {
  state = {
    image: null,
  };

  render() {
    let {image} = this.state;

    return (
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={this._pickImage}>
          {
            this.state.image ?  
            <Image source={{uri: this.state.image}}
              style={{width: 200, height: 200, borderRadius: 100}} 
            />:
            <Image source={require('../assets/user.png')}
              style={{width: 200, height: 200, borderRadius: 100}} 
            />
          }
        </TouchableOpacity>
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({image: result.uri});
    }
  };
}
