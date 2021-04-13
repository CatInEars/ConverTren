import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

interface IProps {
  handleSubmit: () => void,
  isAnswered: string,
  answerValue: string
}

export function SelectButton({
  handleSubmit,
  isAnswered,
  answerValue
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
          backgroundColor: disabled ? 'lightgray' : '#15C160'
        }}
      >
        <Text
          style={commonStyles.trenModeSelectText}
        >
          Select
        </Text>
      </View>
    </TouchableOpacity>
  );
}