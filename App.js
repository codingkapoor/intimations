import React from 'react';
import { createAppContainer } from 'react-navigation';
import LeavesStatusScreen from './src/screens/LeavesStatusScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ProfileScreen from './src/screens/ProfileScreen';

const AppNavigator = createBottomTabNavigator({
  Leaves: LeavesStatusScreen,
  Profile: ProfileScreen
});

const App = createAppContainer(AppNavigator);

export default App;
