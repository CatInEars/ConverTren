import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

export function TreningMode() {
  const { theme } = useContext(ThemeContext);

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