import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
  faPenSquare
} from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from './src/store';

import LeavesContainer from './src/screens/leaves/LeavesContainer';
import ProfileContainer from './src/screens/profile/ProfileContainer';
import TodaysIntimationsScreen from './src/screens/intimations/todays/TodaysIntimationsScreen';
import PlannedIntimationsScreen from './src/screens/intimations/planned/PlannedIntimationsScreen';
import EditIntimationScreen from './src/screens/intimations/edit/EditIntimationScreen';

library.add(fab, faPhoneSquareAlt, faEnvelope, faUserAlt, faBox, faMapMarkerAlt, faBusinessTime, faIdBadge, faCalendarDay, faPenSquare);

const AppNavigator = createBottomTabNavigator(
  {
    Planned: PlannedIntimationsScreen,
    Today: TodaysIntimationsScreen,
    Leaves: LeavesContainer,
    Edit: EditIntimationScreen,
    Profile: ProfileContainer
  },
  {
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
    <App />
  </Provider>
}; 
