import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeader } from '../modules/StackHeader';
import { Settings } from '../../core/Settings/Settings';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

 export function SettingsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Settings' 
        component={Settings} 
        options={{header: props => <StackHeader {...props} />}} 
      />
    </Stack.Navigator>
  );
}