import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TrenScreen } from './navigation/screens/TrenScreen';
import { StatsScreen } from './navigation/screens/StatsScreen';
import { ConverterScreen } from './navigation/screens/ConverterScreen'
import { ProfileScreen } from './navigation/screens/ProfileScreen'
import { connect } from 'react-redux';
import { getScreenOptions } from './modules/navigation/getScreenOptions';
import { StatusBar } from 'react-native';
import { CustomTabBar } from './navigation/modules/CustomTabBar';

type IProps = IStateProps;

interface IStateProps {
  language: ILanguage
}

const Tab = createBottomTabNavigator();

function main({ language }: IProps) {
  
  return (
    <>
      <NavigationContainer>
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
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  );
}

export const Main = connect(
  (state: IState): IStateProps => ({
    language: state.localization
  })
)(main);