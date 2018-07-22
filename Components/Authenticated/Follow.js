import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Follow extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> Follow </Text>
        <Button
          title='Autor'
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />
      </View>
    );
  }
}

export default Follow;
