import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { currencyConverter } from '../../modules/currency/currencyConverter';
import { currencySymbolObj } from '../../modules/currency/currencySymbolObj';
import { getDataForConvert } from '../../modules/currency/otherHelper/getDataForConvert';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

export function CurrencyValue({ currency, currencyData}: any) {
  const { theme } = useContext(ThemeContext);
  const [minimalValuteIndex, setMinimalValuteIndex] = useState((function() {
    const prop1 = currencyConverter(
      getDataForConvert(currency.currency1, currency.currency2, currencyData)
    );
    const prop2 = currencyConverter(
      getDataForConvert(currency.currency2, currency.currency1, currencyData)
    );
    if (prop1 > prop2) return 1;
    return 2
  })());

  const [converted, setConverted] = useState(
    currencyConverter(
      getDataForConvert(
        currency[`currency${minimalValuteIndex}`], 
        currency[`currency${Math.abs(minimalValuteIndex - 3)}`], 
        currencyData
      )
    )
  );

  const minimalValute = 
    currency[`currency${minimalValuteIndex}`];
  const secondValute = 
    currency[`currency${Math.abs(minimalValuteIndex - 3)}`];

  useEffect(() => {
    setConverted(
      currencyConverter(
        getDataForConvert(
          currency[`currency${minimalValuteIndex}`], 
          currency[`currency${Math.abs(minimalValuteIndex - 3)}`], 
          currencyData
        )
      )
    );
  }, [currency]);

  return (
    <View
      style={commonStyles.trenCurrencyValueTextContainer}
    >
      <Text
        style={{
          ...commonStyles.trenCurrencyValueText,
          color: getTextColorWithTheme(theme)
        }}
      >
        1{currencySymbolObj[minimalValute]} ={' '}
        {converted}{currencySymbolObj[secondValute]}
      </Text>
    </View>
  )
}