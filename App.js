import React from 'react';
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

import LeavesStatusScreen from './src/screens/leaves-status/LeavesStatusScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';

library.add(fab, faPhoneSquareAlt, faEnvelope, faUserAlt, faBox, faMapMarkerAlt, faBusinessTime, faIdBadge);

const AppNavigator = createBottomTabNavigator({
  Leaves: LeavesStatusScreen,
  Profile: ProfileScreen
});

const App = createAppContainer(AppNavigator);

export default App;
