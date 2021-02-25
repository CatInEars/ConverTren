import React, { Dispatch, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { DARK, LIGHT } from '../../common/themes';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

function tren({ onChangeLocalization }: any) {
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
        Tren Text
      </Text>
      <Button 
        title='CHANGE THEME'
        onPress={() => toggleTheme(theme === DARK ? LIGHT : DARK)}
      />
      <Button 
        title='CHANGE LANG'
        onPress={() => onChangeLocalization('eng')}
      />
    </View>
  );
}

export const Tren = connect(
  () => ({}),
  (dispatch: Dispatch<ILanguageAction>) => ({
    onChangeLocalization: (lang: ILanguage) => {
      dispatch({type: 'CHANGE_LOCALIZATION', languageSet: lang})
    }
  })
)(tren);