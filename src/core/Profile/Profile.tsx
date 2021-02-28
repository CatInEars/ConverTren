import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { DARK, LIGHT } from '../../common/themes';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

export function Profile() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <View style={{
      ...commonStyles._center,
      backgroundColor: getBGCWithTheme(theme)
    }}>
      <Text 
        style={{
          ...commonStyles.infoText,
          color: getTextColorWithTheme(theme)
        }}
      >
        Profile Text
      </Text>

      <Button
        title="CHANGE THEME"
        onPress={() => toggleTheme(theme === DARK ? LIGHT : DARK)}
      />
    </View>
  );
}