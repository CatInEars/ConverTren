import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

function stackHeader({ scene, lang }: any) {
  const { theme } = useContext(ThemeContext);
  
  return (
    <View style={{
      ...commonStyles.stackHeader,
      backgroundColor: getBGCWithTheme(theme)
    }}>
      <Text
        style={{
          ...commonStyles.stackHeaderTitle,
          color: getTextColorWithTheme(theme)
        }}
      >
        {localization.navigation[scene.route.name].title[lang]}
      </Text>
    </View>
  )
}

export const StackHeader = connect(
  (state: IState) => ({
    lang: state.localization
  })
)(stackHeader);