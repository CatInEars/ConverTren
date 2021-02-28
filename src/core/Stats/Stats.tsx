import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

export function Stats() {
  const { theme } = useContext(ThemeContext);

  return (
    <View 
      style={{
        ...commonStyles._center,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      <Text 
        style={{
          ...commonStyles.infoText,
          color: getTextColorWithTheme(theme)
        }}
      >
        Stats Text
      </Text>
    </View>
  );
}