import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { localization } from '../../../modules/localization/localization';

interface IProps {
  handleSubmit: () => void,
  isAnswered: string,
  answerValue: string,
  lang: ILanguage
}

export function SelectButton({
  handleSubmit,
  isAnswered,
  answerValue,
  lang
}: IProps) {
  const disabled= !!isAnswered || !answerValue

  return (
    <TouchableOpacity
      style={commonStyles.trenModeSelectContainer}
      activeOpacity={0.75}
      disabled={disabled}
      onPress={handleSubmit}
    >
      <View
        style={{
          ...commonStyles.trenModeSelect,
          backgroundColor: disabled ? '#BCBCBC' : '#15C160'
        }}
      >
        <Text
          style={commonStyles.trenModeSelectText}
        >
          {localization.treningMode.selectButton[lang]}
        </Text>
      </View>
    </TouchableOpacity>
  );
}