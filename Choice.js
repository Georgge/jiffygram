import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {authentication} from './Store/Services/Firebase';
import {UnauthenticatedRoutes} from './Components/NotAuthenticated/UnauthenticatedRoutes';
import {establishSessionAction, closeSessionAction} from './Store/Actions';

class Choice extends Component {
  componentDidMount() {
    this.props.authenticated();
  }

  render() {
    return (
      <View style={ styles.container }>
        <UnauthenticatedRoutes />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticated: (values) => {
      authentication.onAuthStateChanged((user) => {
        if (user) {
          console.log(user.toJSON());
          dispatch(establishSessionAction(user));
        } else {
          console.log('Not user');
          dispatch(closeSessionAction());
        }
      });
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Choice);
