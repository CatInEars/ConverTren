import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { ReloadIcon } from '../../svgs/TreningMode/ReloadIcon';

interface IProps {
  setPage: (page: number) => void
}

export function RestartButton({
  setPage
}: IProps) {
  return (
    <TouchableHighlight
      style={{
        ...commonStyles.endScreenButtonContainer,
        width: '30%'
      }}
      onPress={() => setPage(0)}
    >
      <View style={commonStyles.trenModeNextPage}>
        <ReloadIcon />
      </View>
    </TouchableHighlight>
  );
}