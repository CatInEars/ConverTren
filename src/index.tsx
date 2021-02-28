import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { MainAppNavigation } from './navigation/mainParts/MainAppNavigation';

export function Main() {
  
  return (
    <>
      <NavigationContainer>
        <MainAppNavigation />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  );
}