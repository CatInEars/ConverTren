import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { ReloadIcon } from '../../svgs/TreningMode/ReloadIcon';

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
      <View style={commonStyles.trenModeNextPage}>
        <Text>Ещё раз</Text>
      </View>
    </TouchableHighlight>
  );
}