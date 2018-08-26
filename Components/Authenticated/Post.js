import React, {Component} from 'react';
import {View, Text, Button, Dimensions, Image, StyleSheet} from 'react-native';

class Post extends Component {
  render() {
    const {navigation, item} = this.props;
    const {width} = Dimensions.get('window');
    const factor = item.width / width;
    const height = item.height / factor;
    return (
      <View>
        <View style={styles.autor}>
          <Text>{item.autor}</Text>
        </View>
        <Image
          source={{uri: item.secure_url}}
          style={{width, height}}
        />
        <View style={styles.bottom}>
          <Text>Likes</Text>
          <Text>Comments</Text>
        </View>
        {/*<Text> Post </Text>
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
        />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  autor: {
    paddingBottom: 4,
    paddingHorizontal: 10,
  },
  bottom: {
    paddingHorizontal: 10,
  },
});

export default Post;
