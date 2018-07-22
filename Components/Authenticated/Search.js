import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Search extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> Search </Text>
        <Button
          title='Post'
          onPress={() => {
            navigation.navigate('Post');
          }}
        />
      </View>
    );
  }
}

export default Search;
