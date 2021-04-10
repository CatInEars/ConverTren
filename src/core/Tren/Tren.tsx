import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { AttemptStats } from './AttemptStats';
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
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

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
      
      <AttemptStats 
        statsAsw={statsAsw} 
        lang={lang}
      />

      <StartButton 
        lang={lang} 
      />

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