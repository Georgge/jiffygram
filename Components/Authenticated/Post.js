import React, {Component} from 'react';
import {View, Text, Button, Dimensions, Image, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

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
          <View style={styles.iconsContainer}>
            <View style={styles.icons}>
              <Icon name='ios-heart-outline' style={styles.icon} />
              <Icon name='ios-chatbubbles-outline' style={styles.icon} />
              <Icon name='ios-send-outline' style={styles.icon} />
            </View>
            <View>
              <Icon name='ios-flag-outline' style={styles.icon} />
            </View>
          </View>
          <View style={styles.comments}>
            <Text>{item.comment}</Text>
          </View>
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
    paddingHorizontal: 0,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  comments: {
    paddingHorizontal: 10,
  },
});

export default Post;
