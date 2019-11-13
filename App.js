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
  faExternalLinkSquareAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import store from './src/store';
import LeavesContainer from './src/screens/leaves/LeavesContainer';
import ProfileContainer from './src/screens/profile/ProfileContainer';
import TodaysIntimationsScreen from './src/screens/intimations/todays/TodaysIntimationsScreen';
import PlannedIntimationsScreen from './src/screens/intimations/planned/PlannedIntimationsScreen';
import EditIntimationContainer from './src/screens/intimations/edit/EditIntimationContainer';
import AboutContainer from './src/screens/about/AboutContainer';

library.add(fab, faPhoneSquareAlt, faEnvelope, faUserAlt, faBox, faMapMarkerAlt, faBusinessTime, faIdBadge,
  faCalendarDay, faPenSquare, faInfoCircle, faHeart, faExternalLinkSquareAlt);

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
      let i = focused ? <FontAwesomeIcon icon='user-alt' size={19} color={'#0977D3'} />
        : <FontAwesomeIcon icon='user-alt' size={19} color={'#393939'} />
      return i;
    },
    tabBarVisible
  };
};

const AppNavigator = createBottomTabNavigator(
  {
    Planned: PlannedIntimationsScreen,
    Today: TodaysIntimationsScreen,
    Leaves: LeavesContainer,
    Edit: EditIntimationContainer,
    infoFlow
  },
  {
    initialRouteName: "Leaves",
    tabBarOptions: {
      activeTintColor: '#0977D3',
      labelStyle: {
        fontSize: 12,
        paddingBottom: 3
      },
      style: {
        height: 61
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
