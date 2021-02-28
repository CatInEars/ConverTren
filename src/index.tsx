import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { MainAppNavigation } from './navigation/mainParts/MainAppNavigation';
import { useFonts } from 'expo-font'

export function Main() {

  const [loaded] = useFonts({
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf')
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <>
      <NavigationContainer>
        <MainAppNavigation />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  );
}