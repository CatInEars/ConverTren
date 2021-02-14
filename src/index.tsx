import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TrenScreen } from './navigation/screens/TrenScreen';
import { StatsScreen } from './navigation/screens/StatsScreen';
import { ConverterScreen } from './navigation/screens/ConverterScreen'
import { ProfileScreen } from './navigation/screens/ProfileScreen'
import { Provider } from 'react-redux';
import { globalState } from './modules/store/globalState';
import { getLocalOptions } from './modules/navigation/getOptions';

const Tab = createBottomTabNavigator();

export function Main() {
  return (
    <Provider store={globalState}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={ 
            ({route}: any) => 
              getLocalOptions(
                route.name, 
                globalState.getState().localization
              )
          }
        >
          <Tab.Screen name="Tren" component={TrenScreen} />
          <Tab.Screen name="Stats" component={StatsScreen} />
          <Tab.Screen name="Converter" component={ConverterScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}