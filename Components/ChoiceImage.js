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

  return (
    <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={_pickImage}>
        {
          props.image ?  
          <Image source={{uri: props.image.uri}}
            style={{width: 166, height: 166, borderRadius: 83}}
          />:
          <Image source={require('../assets/user.png')}
            style={{width: 166, height: 166, borderRadius: 83}}
          />
        }
      </TouchableOpacity>
    </View>
  );
};

export default ChoiceImage;
