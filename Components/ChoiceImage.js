import React from 'react';
import {Button, Image, View, TouchableOpacity} from 'react-native';
import {ImagePicker} from 'expo';

const ChoiceImage = (props) => {
  const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);

    if (!result.cancelled) {
      props.load(result);
    }
  };

  const radius = {borderRadius: props.radius? 0: 80};
  const image = props.radius? require('../assets/gallery.png'): require('../assets/user.png');

  return (
    <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={_pickImage}>
        {
          props.image ?  
          <Image source={{uri: props.image.uri}}
            style={{width: 166, height: 166, ...radius}}
          />:
          <Image source={image}
            style={{width: 166, height: 166, ...radius}}
          />
        }
      </TouchableOpacity>
    </View>
  );
};

export default ChoiceImage;
