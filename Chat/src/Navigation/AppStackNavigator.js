
import { createStackNavigator } from 'react-navigation';
import ChatPage from '../components/ChatPage';


const AppStackNavigator = createStackNavigator({
    ChatPage: {
      screen: ChatPage,
      navigationOptions: {
        header: null
      }
    },
  },

  {
    initialRouteName: "ChatPage"
  }
);

//const HolaVet = createAppContainer(AppStackNavigator);
//export default HolaVet;

export default AppStackNavigator;