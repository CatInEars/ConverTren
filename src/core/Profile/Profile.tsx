import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { SettingsIcon } from '../svgs/others/SettingsIcon';

export function Profile() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { navigate } = useNavigation();
  
  return (
    <View style={{
      ...commonStyles._center,
      backgroundColor: getBGCWithTheme(theme)
    }}>
      <TouchableWithoutFeedback
        onPress={() => navigate('Settings')}
      >
        <SettingsIcon />
      </TouchableWithoutFeedback>
    </View>
  );
}