import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute, } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../Screens/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Address from '../../Screens/Profile';
import Colors from '../../Constans/Colors';
import LeaderBoard from '../../Screens/LeaderBoard';
import Research from '../../Screens/Research';
import League from '../../Screens/League';

// const Tab = createMaterialBottomTabNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (

    <Tab.Navigator
      inactiveColor="#95a5a6"
      activeColor={Colors.purple}
      screenOptions={{ headerShown: false, tabBarStyle: { height: 60, paddingBottom: 5 }, tabBarLabelStyle: { fontSize: 12 }, tabBarActiveTintColor: Colors.purple, tabBarIconStyle: { Size: 25 } }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={30} color={focused ? Colors.purple : '#B5C0C8'} />
          ),
        }}
      />
      <Tab.Screen
        name="League"
        component={League}
        options={{
          tabBarLabel: 'League',
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="trophy" size={25} color={focused ? Colors.purple : '#B5C0C8'} />
          ),
        }}
      />
      <Tab.Screen
        name="Research"
        component={Research}
        options={{
          tabBarLabel: 'Research',
          tabBarIcon: ({ focused }) => (
            <Fontisto name="search" size={25} color={focused ? Colors.purple : '#B5C0C8'} />
          ),
        }}
      />
      <Tab.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="leaderboard" size={25} color={focused ? Colors.purple : '#B5C0C8'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Address}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="user" size={25} color={focused ? Colors.purple : '#B5C0C8'} />
          ),
        }}
      />
    </Tab.Navigator>

  );
};

export default MainTabNavigation;
