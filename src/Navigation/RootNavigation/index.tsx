import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackPrams';
import TabContent from '../TabContent';
import Address from '../../Screens/Profile';
import MainTabNavigation from '../MainTabNavigation';
import League from '../../Screens/League';
import Research from '../../Screens/Research';
import LeaderBoard from '../../Screens/LeaderBoard';
import BodyWarpper from '../../Component/BodyWarpper';


const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: true,
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <BodyWarpper edges={['bottom']}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={MainTabNavigation} />
        <Stack.Screen name="TabContent" component={TabContent} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="League" component={League} />
        <Stack.Screen name="Research" component={Research} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      </Stack.Navigator>
   
    </NavigationContainer>
    </BodyWarpper>
  );
};

export default RootNavigation;
