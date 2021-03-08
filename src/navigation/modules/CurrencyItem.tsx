import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { flagsObj } from '../../modules/currency/flagsObj';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

export function CurrencyItem(item: ICurrencyItem) {
  const Icon = flagsObj[item.CharCode];
  const { theme } = useContext(ThemeContext)

  return (
    <TouchableOpacity
      onPress={() => {}}
    >
      <View style={commonStyles.currencyItemContainer}>
        <View style={commonStyles.currencyIconContainer}>
          <Icon />
        </View>

        <View>
          <Text 
            style={{
              ...commonStyles.currencyItemTextChar,
              color: getTextColorWithTheme(theme)
            }}
          >
            {item.CharCode}
          </Text>

          <Text 
            style={{
              ...commonStyles.currencyItemTextName,
              color: getTextColorWithTheme(theme)
            }}
          >
            {item.CharCode == 'GBP' ? 'Фунт стерлингов' : item.CharCode}
          </Text>

        </View>
      </View>
    </TouchableOpacity>
  );
}