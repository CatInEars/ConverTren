import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { currencyConverter } from '../../modules/currency/currencyConverter';
import { currencySymbolObj } from '../../modules/currency/currencySymbolObj';
import { getDataForConvert } from '../../modules/currency/otherHelper/getDataForConvert';
import { localization } from '../../modules/localization/localization';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { CurrencySelector } from './CurrencySelector';
import { CurrencyValue } from './CurrencyValue';
import { DisableTimer } from './DisableTimer';
import { Quote } from './Quote';
import { StartButton } from './StartButton';

interface IProps {
  lang: ILanguage,
  statsAsw: number[],
  currency: any,
  currencyData: any
}

function tren({ lang, statsAsw, currency, currencyData }: IProps) {
  const [sorted, setSorted] = useState<number[]>([]);
  const [arrLen, setArrLen] = useState(0);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  useEffect(() => {
    setSorted([...statsAsw].sort((a: number, b: number) => a - b));
    setArrLen(statsAsw.length);
  }, [statsAsw]);

  const handlePress = (currencyListNumber: number) => {
    navigation.navigate('CurrencySelectModal', { currencyListNumber });
  }

  return (
    <View
      style={{
        ...commonStyles.trenScreenContainer,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      <View>
        <Text 
          style={{
            ...commonStyles.trenLogoText,
            color: getTextColorWithTheme(theme)
          }}
        >
          ConverTren
        </Text>
      </View>

      <CurrencySelector
        handleOpenCurrencyList={handlePress}
      />

      <CurrencyValue 
        currency={currency}
        currencyData={currencyData}
      />
      
      <View style={commonStyles.trenStatsTextContainer}>
        <Text
          style={{
            color: getTextColorWithTheme(theme),
            ...commonStyles.trenStatsText
          }}
        >
          {localization.TrenScreen.lastAttempt[lang]}:{' '}
          {arrLen === 0 ? '--' : 
          (statsAsw[arrLen - 1] < 5 ? '<5%' : `${statsAsw[arrLen - 1]}%`)
          }
        </Text>

        <Text
          style={{
            color: getTextColorWithTheme(theme),
            ...commonStyles.trenStatsText
          }}
        >
          {localization.TrenScreen.bestAttempt[lang]}:{' '}
          {arrLen === 0 ? '--' : 
          (sorted[arrLen - 1] < 5 ? '<5%' : `${sorted[arrLen - 1]}%`)
          }
        </Text>
      </View>

      <StartButton lang={lang} />
      <DisableTimer />

      <Quote lang={lang} />
    </View>
  );
}

export const Tren = connect(
  (state: IState) => ({
    lang: state.localization,
    statsAsw: state.statsAsw,
    currency: {
      currency1: state.currency1,
      currency2: state.currency2
    },
    currencyData: state.currencyList
  })
)(tren);