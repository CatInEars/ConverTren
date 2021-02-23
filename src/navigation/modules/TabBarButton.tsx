import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { DARK, DARK_ICON_COLOR, LIGHT_ICON_COLOR } from '../../common/themes';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';

export function TabBarButton({ 
  tabBarIcon, 
  isFocused, 
  title
}: any) {
  const Icon = tabBarIcon;
  const focused = isFocused();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <View
        style={{ width: 25, height: 25}}
      >
        <Icon 
          fill={
            focused ? 
              (theme === DARK ? DARK_ICON_COLOR : LIGHT_ICON_COLOR) 
            : 
              '#666666'
          } 
        />
      </View>

      {
        focused ?
        <View>
          <Text 
            style={{
              ...commonStyles.infoText,
              color: getTextColorWithTheme(theme)
            }}
          >
            {title}
          </Text>
        </View>
        :
        null
      }
    </>
  );
}