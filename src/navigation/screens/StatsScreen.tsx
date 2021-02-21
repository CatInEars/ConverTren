import React from 'react';
import { Stats } from '../../core/Stats/Stats';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeader } from '../modules/StackHeader';

const Stack = createStackNavigator();

export function StatsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Stats' 
        component={Stats} 
        options={{header: StackHeader}} 
      />
    </Stack.Navigator>
  );
}