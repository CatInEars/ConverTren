import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { DARK, DARK_ICON_COLOR, LIGHT_ICON_COLOR } from '../../common/themes';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { localization } from '../../modules/localization/localization';
import { connect } from 'react-redux';

function tabBarButton({ 
  tabBarIcon, 
  isFocused, 
  routeName,
  lang
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
            {localization.navigation[routeName].title[lang]}
          </Text>
        </View>
        :
        null
      }
    </>
  );
}

export const TabBarButton = connect(
  (state: IState) => ({
    lang: state.localization
  })
)(tabBarButton);