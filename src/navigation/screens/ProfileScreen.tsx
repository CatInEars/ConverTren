import React from 'react';
import { Profile } from '../../core/Profile/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeader } from '../modules/StackHeader';

const Stack = createStackNavigator();

export function ProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Profile' 
        component={Profile} 
        options={{header: StackHeader}} 
      />
    </Stack.Navigator>
  );
}