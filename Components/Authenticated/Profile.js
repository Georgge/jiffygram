import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
      </View>
    );
  }
}

export default Profile;
