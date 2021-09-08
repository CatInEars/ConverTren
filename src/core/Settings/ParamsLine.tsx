import React, { Dispatch, useContext } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Select } from '../../common/commonComponens/Select/Select';
import { commonStyles } from '../../common/commonStyles';
import { DARK, LIGHT } from '../../common/themes';
import { localization } from '../../modules/localization/localization';
import { languageItems } from '../../modules/other/languageItems';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

interface IProps {
  lang: ILanguage,
  parametries: 'language' | 'theme',
  onChangeAnyProps?: (selectValue: string | number) => void
}

function paramsLine({ 
  lang,
  parametries,
  onChangeAnyProps
}: IProps) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const gettingItems = parametries === 'language' ?
    languageItems
  :
    [
      localization.settingsScreen.themeSelect.lightTheme[lang],
      localization.settingsScreen.themeSelect.darkTheme[lang]
    ]

  return (
    <>
      <View
        style={commonStyles.settingsScreenParamItem}
      >
        <Text
          style={{
            ...commonStyles.settingsScreenParamText,
            color: getTextColorWithTheme(theme)
          }}
        >
          {localization.settingsScreen.params[parametries][lang]}
        </Text>
      </View>

      <View
        style={commonStyles.settingsScreenParamItem}
      >
        <Select
          items={gettingItems}
          onSelectItem={onChangeAnyProps}
        />
      </View>
    </>
  );
}

export const ParamsLine = connect(
  (state: IState) => ({
    lang: state.localization
  })
)(paramsLine);