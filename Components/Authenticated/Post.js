import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Post extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> Post </Text>
        <Button
          title='Comments'
          onPress={() => {
            navigation.navigate('Commentary');
          }}
        />
      </View>
    );
  }
}

export default Post;
