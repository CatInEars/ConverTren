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

interface IProps {
  onChangeLanguage: Dispatch<any>,
  language: ILanguage
}

function settings({ 
  onChangeLanguage,
  language
}: IProps) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{
      ...commonStyles._center,
      backgroundColor: getBGCWithTheme(theme),
    }}>

      <View style={commonStyles.settingsScreenParamsContainer}>
        <View
          style={commonStyles.settingsScreenParamItem}
        >
          <Text
            style={{
              ...commonStyles.settingsScreenParamText
              // color: getTextColorWithTheme(theme)
            }}
          >
            {localization.settingsScreen.params.language[language]}
          </Text>
        </View>

        <View
          style={commonStyles.settingsScreenParamItem}
        >
          <Select
            items={['Russian', 'English']}
          />
        </View>
      </View>
      

      {/* <Button
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
)(settings)