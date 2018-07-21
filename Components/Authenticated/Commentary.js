import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Commentary extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> Commentary </Text>
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

export default Commentary;
