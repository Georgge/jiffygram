import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {authentication} from '../../Store/Services/Firebase';

class Profile extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> Profile </Text>
        <Button
          title="Post"
          onPress={() => {
            navigation.navigate('Post');
          }}
        />
        <Button
          title="Salir"
          onPress={() => {
            authentication.signOut();
          }}
        />
      </View>
    );
  }
}

export default Profile;
