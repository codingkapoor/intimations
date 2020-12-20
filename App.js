import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
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
  faPen,
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
import AboutContainer from './src/screens/about/AboutContainer';
import ResolveAuthScreen from './src/screens/signin/ResolveAuthScreen';
import { setTopLevelNavigator } from './src/common/NavigationService';
import SignInContainer from './src/screens/signin/SignInContainer';
import IntimationsFlowNavigator from './src/common/components/IntimationsFlowNavigator';
import { RootSiblingParent } from 'react-native-root-siblings';

library.add(fab, faPhoneSquareAlt, faEnvelope, faUserAlt, faBox, faMapMarkerAlt, faBusinessTime, faIdBadge,
  faCalendarDay, faPen, faInfoCircle, faHeart, faExternalLinkSquareAlt, faBell);

const infoFlow = createStackNavigator({
  Profile: ProfileContainer,
  About: AboutContainer
});

infoFlow.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0)
    tabBarVisible = false;

  return {
    title: '',
    tabBarIcon: ({ focused }) => {
      let i = focused ? <FontAwesomeIcon icon='user-alt' size={27} color={'#3780BE'} />
        : <FontAwesomeIcon icon='user-alt' size={27} color={'#393939'} />
      return i;
    },
    tabBarVisible
  };
};


const mainFlow = createBottomTabNavigator(
  {
    intimationsFlow: IntimationsFlowNavigator,
    Leaves: LeavesContainer,
    infoFlow
  },
  {
    initialRouteName: 'intimationsFlow',
    tabBarOptions: {
      activeTintColor: '#0977D3',
      labelStyle: {
        fontSize: 12,
        paddingBottom: 2
      },
      style: {
        paddingTop: 20,
        height: 55
      }
    }
  }
);

const AppNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  Signin: SignInContainer,
  mainFlow
});

const App = createAppContainer(AppNavigator);

export default () => {
  return <Provider store={store}>
    <SafeAreaProvider>
      // https://github.com/magicismight/react-native-root-toast/issues/124#issuecomment-629960966
      <RootSiblingParent>
        <App ref={navigatorRef => { setTopLevelNavigator(navigatorRef) }} />
      </RootSiblingParent>
    </SafeAreaProvider>
  </Provider>
}; 
