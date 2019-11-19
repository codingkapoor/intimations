import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneSquareAlt,
  faEnvelope,
  faUserAlt,
  faBox,
  faMapMarkerAlt,
  faBusinessTime,
  faIdBadge,
  faCalendarDay,
  faPenSquare,
  faInfoCircle,
  faHeart,
  faExternalLinkSquareAlt,
  faBell
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import store from './src/store';

import LeavesContainer from './src/screens/leaves/LeavesContainer';
import ProfileContainer from './src/screens/profile/ProfileContainer';
import FeedContainer from './src/screens/feed/FeedContainer';
import AboutContainer from './src/screens/about/AboutContainer';

library.add(fab, faPhoneSquareAlt, faEnvelope, faUserAlt, faBox, faMapMarkerAlt, faBusinessTime, faIdBadge,
  faCalendarDay, faPenSquare, faInfoCircle, faHeart, faExternalLinkSquareAlt, faBell);

const infoFlow = createStackNavigator({
  Profile: ProfileContainer,
  About: AboutContainer
});

infoFlow.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    title: 'Profile',
    tabBarIcon: ({ focused }) => {
      let i = focused ? <FontAwesomeIcon icon='user-alt' size={24} color={'#3780BE'} />
        : <FontAwesomeIcon icon='user-alt' size={24} color={'#393939'} />
      return i;
    },
    tabBarVisible
  };
};

const AppNavigator = createBottomTabNavigator(
  {
    Feed: FeedContainer,
    Leaves: LeavesContainer,
    infoFlow
  },
  {
    initialRouteName: "Leaves",
    tabBarOptions: {
      activeTintColor: '#0977D3',
      labelStyle: {
        fontSize: 12,
        paddingBottom: 2
      },
      style: {
        paddingTop: 5,
        height: 59
      }
    }
  }
);

const App = createAppContainer(AppNavigator);

export default () => {
  return <Provider store={store}>
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  </Provider>
}; 
