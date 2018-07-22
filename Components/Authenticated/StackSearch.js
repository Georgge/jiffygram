import {StackNavigator} from 'react-navigation';
import Search from './Search';
import Autor from './Profile';
import Post from './Post';
import Commentary from './Commentary';

const StackSearch = StackNavigator({
  Search: {
    screen: Search,
  },
  Post: {
    screen: Post,
  },
  Autor: {
    screen: Autor,
  },
  Commentary: {
    screen: Commentary,
  },
});

export {StackSearch};
