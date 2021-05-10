import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';

interface IProps {
  setPage: (page: number) => void,
  setTimeIsOut: (value: boolean) => void
}

export function RestartButton({
  setPage,
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
        <Text style={commonStyles.trenModeRestartText}>Ещё раз</Text>
      </View>
    </TouchableHighlight>
  );
}