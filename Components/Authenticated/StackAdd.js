import {StackNavigator} from 'react-navigation';
import Add from './Add';
import GaleryChoice from './GaleryChoice';

const StackAdd = StackNavigator({
  Add: {
    screen: Add,
  },
  Choice: {
    screen: GaleryChoice,
  },
});

export {StackAdd};
