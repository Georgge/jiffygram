import {StackNavigator} from 'react-navigation';
import {TabFollow} from './TabFollow';
import Autor from './Profile';
import Post from './Post';
import Commentary from './Commentary';

const StackFollow = StackNavigator(
  {
    TabFollow: {
      screen: TabFollow,
      navigationOptions: {
        header: null,
      },
    },
    Autor: {
      screen: Autor,
    },
    Post: {
      screen: Post,
    },
    Commentary: {
      screen: Commentary,
    },
  }
);

export {StackFollow};
