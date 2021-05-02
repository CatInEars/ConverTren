import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, TouchableHighlight, View } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';

export function ExitButton() {
  const { navigate } = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigate('MainApp')}
      style={{
        width: '60%',
        ...commonStyles.endScreenTouchableStyle
      }}
    >
      <View style={commonStyles._center}>
        <Text
          style={commonStyles.endScreenButtonText}
        >
          Выйти
        </Text>
      </View>
    </TouchableHighlight>
  );
}