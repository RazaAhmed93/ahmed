import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signin from './Signin';
import Signup from './Signup';

const AppNavigator = createStackNavigator({
    Signin: {
      screen: Signin,
    },
    Signup: {
        screen: Signup,
      },
  },
  {
      initialRouteName:"Signin"
  }
  );
  
  export default createAppContainer(AppNavigator);