import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Select } from '../../common/commonComponens/Select/Select';
import { commonStyles } from '../../common/commonStyles';
import { DARK, LIGHT } from '../../common/themes';
import { localization } from '../../modules/localization/localization';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { ParamsLine } from './ParamsLine';

interface IProps {
  onChangeLanguage: Dispatch<any>,
  language: ILanguage
}

function settings({ 
  onChangeLanguage,
  language
}: IProps) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChangeTheme = (selectValue) => {
    if (language === 'rus') {
      selectValue = selectValue === 'Светлая' ? LIGHT : DARK
    } else {
      selectValue = selectValue === 'Light' ? LIGHT : DARK
    }

    toggleTheme(selectValue);
  }

  const handleChangeLanguage = (selectValue) => {
    selectValue = selectValue === 'English' ? 'eng' : 'rus';

    onChangeLanguage(selectValue)
  }

  return (
    <View style={{
      ...commonStyles._center,
      backgroundColor: getBGCWithTheme(theme),
    }}>

      <View style={commonStyles.settingsScreenParamsContainer}>
        <ParamsLine 
          parametries='theme'
          onChangeAnyProps={handleChangeTheme}
        />
      </View>

      <View style={commonStyles.settingsScreenParamsContainer}>
        <ParamsLine 
          parametries='language'
          onChangeAnyProps={handleChangeLanguage}
        />
      </View>
    
      {/* <Button
        title="SELECT RUS"
        onPress={() => onChangeLanguage('rus')}
      />
      <Button
        title="SELECT ENG"
        onPress={() => onChangeLanguage('eng')}
      /> */}
    </View>
  );
}

export const Settings = connect(
  (state: IState) => ({
    language: state.localization
  }),
  (dispatch: Dispatch<ILanguageAction>) => ({
    onChangeLanguage: (lang: ILanguage) => {
      dispatch({ type: 'CHANGE_LOCALIZATION', languageSet: lang})
    }
  })
)(settings);