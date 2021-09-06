import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Select } from '../../common/commonComponens/Select/Select';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';

interface IProps {
  lang: ILanguage,
  parametries: string
}

function paramsLine({ 
  lang,
  parametries
}: IProps) {
  return (
    <>
      <View
        style={commonStyles.settingsScreenParamItem}
      >
        <Text
          style={{
            ...commonStyles.settingsScreenParamText
          }}
        >
          {localization.settingsScreen.params[parametries][lang]}
        </Text>
      </View>

      <View
        style={commonStyles.settingsScreenParamItem}
      >
        <Select
          items={['Русский', 'English']}
          onSelectItem={(newLanguage) => console.log(newLanguage)}
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