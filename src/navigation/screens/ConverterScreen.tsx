import React from 'react';
import { Converter } from '../../core/Converter/Converter';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeader } from '../modules/StackHeader';

const Stack = createStackNavigator();

export function ConverterScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Converter' 
        component={Converter} 
        options={{header: StackHeader}} 
      />
    </Stack.Navigator>
  );
}