import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { flagsObj } from '../../modules/currency/flagsObj';

export function CurrencyItem(item: ICurrencyItem) {
  const Icon = flagsObj[item.CharCode];

  return (
    <TouchableOpacity
      onPress={() => {}}
    >
      <View style={commonStyles.currencyItemContainer}>
        <View style={commonStyles.currencyIconContainer}>
          <Icon />
        </View>

        <View>
          <Text style={commonStyles.currencyItemTextChar}>{item.CharCode}</Text>
          <Text style={commonStyles.currencyItemTextName}>
            {item.CharCode == 'GBP' ? 'Фунт стерлингов' : item.Name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}