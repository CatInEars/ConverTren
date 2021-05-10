import React, { Dispatch, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { MainStackNavigation } from './navigation/mainParts/MainStackNavigation';
import { useFonts } from 'expo-font'
import { connect } from 'react-redux';
import { getCurrencyArr } from './modules/currency/getCurrencyArr';
import { StatusBar } from 'expo-status-bar';
import { LIGHT } from './common/themes';
import { ThemeContext } from './modules/theme/ThemeContext';

interface IProps {
  onCurrencyLoad: any
}

function main({ onCurrencyLoad }: IProps) {
  const { theme } = useContext(ThemeContext);
  const [currencyLoaded, setCurrencyLoaded] = useState(false);
  const [Fontloaded] = useFonts({
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf')
  });

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then( resolve => resolve.json() )
      .then( json => onCurrencyLoad(getCurrencyArr(json)))
      .catch( error => console.log(error) )
      .finally( () => setCurrencyLoaded(true) );
  }, []);
  
  return (
    <>{
      (Fontloaded && currencyLoaded)
      ?
      <>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
        <StatusBar style={theme === LIGHT ? 'dark' : 'light'} />
      </>
      :
      <ActivityIndicator size={56} color='skyblue' />
    }</>
  );
}

export const Main = connect(
  () => ({}),
  (dispatch: Dispatch<ICurrencyLoad>): IProps => ({
    onCurrencyLoad: (data: any) => dispatch({type: 'CURRENCY_LOADED', currency: data})
  })
)(main);