import React from 'react';
import { TouchableHighlight, View } from 'react-native';
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
        width: '25%', 
        ...commonStyles.endScreenTouchableStyle
      }}
      onPress={() => setPage(0)}
    >
      <View style={commonStyles._center}>
        <ReloadIcon />
      </View>
    </TouchableHighlight>
  );
}