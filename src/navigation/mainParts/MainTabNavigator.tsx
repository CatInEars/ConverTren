import React from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getScreenOptions } from '../../modules/navigation/getScreenOptions';
import { CustomTabBar } from '../modules/CustomTabBar';
import { ConverterScreen } from '../screens/ConverterScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { StatsScreen } from '../screens/StatsScreen';
import { TrenScreen } from '../screens/TrenScreen';

const Tab = createBottomTabNavigator();

interface IProps {
  language: ILanguage
}

function mainTabNavigator({ language }: IProps) {
  return (
    <Tab.Navigator
      screenOptions={
        ({route}: any) => getScreenOptions(
          route.name, 
          language
        )
      }
      tabBar={(props: any) => <CustomTabBar {...props}/>}
    >
      <Tab.Screen name="Tren" component={TrenScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Converter" component={ConverterScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export const MainTabNavigator = connect(
  (state: IState) => ({
    language: state.localization
  })
)(mainTabNavigator);