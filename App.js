import React from 'react';
import { createAppContainer } from 'react-navigation';
import LeavesStatusScreen from './src/screens/LeavesStatusScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ProfileScreen from './src/screens/ProfileScreen';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faPhoneSquareAlt, 
  faEnvelope,
  faUserAlt,
  faBox
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPhoneSquareAlt, faEnvelope, faUserAlt, faBox);

const AppNavigator = createBottomTabNavigator({
  Profile: ProfileScreen,
  Leaves: LeavesStatusScreen
});

const App = createAppContainer(AppNavigator);

export default App;
