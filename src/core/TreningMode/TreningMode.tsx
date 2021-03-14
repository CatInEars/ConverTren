import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { currencyConverter } from '../../modules/currency/currencyConverter'

interface IProps {
  currencyData: ICurrencyItem[]
}

function treningMode({ currencyData }: IProps) {
  const { theme } = useContext(ThemeContext);
  const data: IConvertArgs = {
    inputCurrency: {
      currency: 'USD',
      count: 873
    },
    outputCurrency: 'EUR',
    currencyData
  }

  console.log(currencyConverter(data))

  return (
    <View
      style={{
        ...commonStyles.treningModeScreen,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      <Text
        style={{
          color: getTextColorWithTheme(theme)
        }}
      >Trening Mode active</Text>
    </View>
  );
}

export const TreningMode = connect(
  (state: IState): IProps => ({
    currencyData: state.currencyList
  })
)(treningMode);