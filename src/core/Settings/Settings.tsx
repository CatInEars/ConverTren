import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { commonStyles } from '../../common/commonStyles';
import { DARK, LIGHT } from '../../common/themes';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

interface IProps {
  onChangeLanguage: Dispatch<any>
}

function settings({ onChangeLanguage }: IProps) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{
      ...commonStyles._center,
      backgroundColor: getBGCWithTheme(theme)
    }}>

      <Button
        title="CHANGE THEME"
        onPress={() => toggleTheme(theme === DARK ? LIGHT : DARK)}
      />
      <Button
        title="SELECT RUS"
        onPress={() => onChangeLanguage('rus')}
      />
      <Button
        title="SELECT ENG"
        onPress={() => onChangeLanguage('eng')}
      />
    </View>
  );
}

export const Settings = connect(
  (state: IState) => ({}),
  (dispatch: Dispatch<ILanguageAction>) => ({
    onChangeLanguage: (lang: ILanguage) => {
      dispatch({ type: 'CHANGE_LOCALIZATION', languageSet: lang})
    }
  })
)(settings)