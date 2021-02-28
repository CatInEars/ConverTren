import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TrenModeScreen } from '../screens/TrenModeScreen';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createStackNavigator();

export function MainAppNavigation() {
  return (
    <Stack.Navigator
      headerMode='none'
    >
      <Stack.Screen name="MainApp" component={MainTabNavigator} />
      <Stack.Screen name="TreningMode" component={TrenModeScreen} />
    </Stack.Navigator>
  );
}