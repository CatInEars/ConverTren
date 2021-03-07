import React, { Dispatch, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';
import { MainStackNavigation } from './navigation/mainParts/MainStackNavigation';
import { useFonts } from 'expo-font'
import { connect } from 'react-redux';

interface IProps {
  onCurrencyLoad: any
}

function main({ onCurrencyLoad }: IProps) {
  const [currencyLoaded, setCurrencyLoaded] = useState(false);
  const [Fontloaded] = useFonts({
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf')
  });

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then( resolve => resolve.json() )
      .then( json => {
        const currencyArr = [];
        for (let key in json.Valute) {
          currencyArr.push(json.Valute[key]);
        }
        onCurrencyLoad(currencyArr);
      })
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
        <StatusBar barStyle="light-content" />
      </>
      :
      <ActivityIndicator size={56} color='skyblue' />
    }</>
  );
}

export const Main = connect(
  (state: IState) => ({}),
  (dispatch: Dispatch<ICurrencyLoad>): IProps => ({
    onCurrencyLoad: (data: any) => dispatch({type: 'CURRENCY_LOADED', currency: data})
  })
)(main);