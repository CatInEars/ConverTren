import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { TrenModeScreen } from '../screens/TrenModeScreen';
import { MainTabNavigator } from './MainTabNavigator';
import { CurrencySelectModal } from '../modules/CurrencySelectModal';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <Stack.Navigator 
      headerMode='none'
      screenOptions={{animationEnabled: false}}
    >
      <Stack.Screen name="MainApp" component={MainTabNavigator} />
      <Stack.Screen name="TreningMode" component={TrenModeScreen} />
      <Stack.Screen name="CurrencySelectModal" component={CurrencySelectModal} 
        options={{
          animationEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}