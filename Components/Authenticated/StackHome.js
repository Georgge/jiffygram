import {StackNavigator} from 'react-navigation';
import Home from './Home';
import Autor from './Profile';
import Post from './Post';
import Commentary from './Commentary';

const StackHome = StackNavigator({
  Home: {
    screen: Home,
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
});

export {StackHome};
