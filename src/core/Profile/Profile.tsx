import React, { Dispatch, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { DARK, LIGHT } from '../../common/themes';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

interface IProps {
  onChangeLanguage: Dispatch<any>
}

function profile({ onChangeLanguage }: IProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <View style={{
      ...commonStyles._center,
      backgroundColor: getBGCWithTheme(theme)
    }}>
      <Text 
        style={{
          color: getTextColorWithTheme(theme)
        }}
      >
        Profile Text
      </Text>

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

export const Profile = connect(
  (state: IState) => ({}),
  (dispatch: Dispatch<ILanguageAction>): IProps => ({
    onChangeLanguage: (lang: ILanguage) => {
      dispatch({ type: 'CHANGE_LOCALIZATION', languageSet: lang });
    }
  })
)(profile);