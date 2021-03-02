import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';
import { MainAppNavigation } from './navigation/mainParts/MainAppNavigation';
import { useFonts } from 'expo-font'

export function Main() {
  const [currencyLoaded, setCurrencyLoaded] = useState(false);
  const [currencyData, setCurrencyData] = useState({});
  const [Fontloaded] = useFonts({
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf')
  });

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then( resolve => resolve.json() )
      .then( json => setCurrencyData(json.Valute))
      .catch( error => new Error(error) )
      .finally( () => setCurrencyLoaded(true) );
  }, []);
  
  return (
    <>{
      (Fontloaded && currencyLoaded)
      ?
      <>
        <NavigationContainer>
          <MainAppNavigation />
        </NavigationContainer>
        <StatusBar barStyle="light-content" />
      </>
      :
      <ActivityIndicator size={56} color='skyblue' />
    }</>
  );
}