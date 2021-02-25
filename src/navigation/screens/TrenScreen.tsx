import React from 'react';
import { Tren } from '../../core/Tren/Tren';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeader } from '../modules/StackHeader';

const Stack = createStackNavigator();

export function TrenScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Tren' 
        component={Tren}
        options={{header: props => <StackHeader {...props} />}} 
      />
    </Stack.Navigator>
  );
}