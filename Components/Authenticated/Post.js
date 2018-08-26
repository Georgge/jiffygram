import React, {Component} from 'react';
import {View, Text, Button, Dimensions, Image, StyleSheet} from 'react-native';

class Post extends Component {
  render() {
    console.log(this.props.autor);
    const {navigation, item, autor} = this.props;
    const {width} = Dimensions.get('window');
    const factor = item.width / width;
    const height = item.height / factor;
    return (
      <View>
        <View style={styles.header}>
          <Image source={{uri: autor.user_picture}}
            style={{width: 34, height: 34, borderRadius: 17, marginRight: 10}} />
          <Text>{autor.user_name}</Text>
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
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default Post;
