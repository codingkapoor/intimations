import React from 'react';
import { createAppContainer } from 'react-navigation';
import LeavesStatusScreen from './src/screens/LeavesStatusScreen';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Leaves: LeavesStatusScreen
});

const App = createAppContainer(AppNavigator);

export default App;
