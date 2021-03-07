import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function CurrencyItem(item: ICurrencyItem) {
  return (
    <View style={commonStyles.currencyItemContainer}>
      <Text style={commonStyles.currencyItemTextChar}>{item.CharCode}</Text>
      <Text style={commonStyles.currencyItemTextName}>
        {item.CharCode == 'GBP' ? 'Фунт стерлингов' : item.Name}
      </Text>
    </View>
  );
}