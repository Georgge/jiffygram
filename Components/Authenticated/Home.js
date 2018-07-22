import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={ styles.container }>
        <Text> Home </Text>
        <Button
          title='Autor'
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

