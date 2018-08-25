import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, FlatList, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {downloadPublicationsAction} from '../../Store/Actions';

class Home extends Component {
  componentDidMount() {
    this.props.getPublications();
  }

  render() {
    console.log(this.props.publications);
    const {navigation} = this.props;
    return (
      <View style={ styles.container }>
        <FlatList
          data={this.props.publications}
          renderItem={({item}) => {
            const {width} = Dimensions.get('window');
            const factor = item.width / width;
            const height = item.height / factor;
            return <Image
              source={{uri: item.secure_url}}
              style={{width, height}}
            />;
          }}
        />
        {/*<Text> Home </Text>
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

const mapStateToProps = (state) => {
  return {
    publications: state.publicationsFromFirebase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPublications: () => {
      dispatch(downloadPublicationsAction());
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
