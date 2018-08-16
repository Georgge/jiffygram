import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class Add extends Component {
  render() {
    const {navigation} = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Button
          title='Select from galery'
          onPress={ () => {
            navigation.navigate('Choice');
          }}
        />
        <Button
          title='Take photo'
          onPress={ () => {
            navigation.navigate('Choice');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Add;
