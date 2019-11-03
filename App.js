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
  faIdBadge
} from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from './src/core/store';

import ProfileScreen from './src/screens/profile/ProfileScreen';
import LeavesStatusContainer from './src/screens/leaves-status/LeavesStatusContainer';

library.add(fab, faPhoneSquareAlt, faEnvelope, faUserAlt, faBox, faMapMarkerAlt, faBusinessTime, faIdBadge);

const AppNavigator = createBottomTabNavigator({
  Leaves: LeavesStatusContainer,
  Profile: ProfileScreen
});

const Navigation = createAppContainer(AppNavigator);

const App = () => {
  return <Provider store={store}>
    <Navigation />
  </Provider>
};

export default App; 
