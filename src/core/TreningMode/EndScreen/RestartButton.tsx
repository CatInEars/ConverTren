import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { localization } from '../../../modules/localization/localization';

interface IProps {
  setPage: (page: number) => void,
  setTimeIsOut: (value: boolean) => void,
  lang: ILanguage
}

export function RestartButton({
  setPage,
  lang,
  setTimeIsOut
}: IProps) {
  return (
    <TouchableHighlight
      style={{
        ...commonStyles.endScreenButtonContainer,
        width: '100%'
      }}
      onPress={() => {
        setPage(0); 
        setTimeIsOut(false)
      }}
    >
      <View style={commonStyles.trenModeRestartContainer}>
        <Text style={commonStyles.trenModeRestartText}>
          {localization.treningMode.restart[lang]}
        </Text>
      </View>
    </TouchableHighlight>
  );
}