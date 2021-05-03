import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, View, TouchableHighlight } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';

export function ExitButton() {
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        ...commonStyles.endScreenButtonContainer,
        width: '60%',
      }}
    >
      <TouchableHighlight onPress={() => navigate('MainApp')}>
        <View style={commonStyles.trenModeNextPage}>
          <Text style={commonStyles.endScreenButtonText}>
            Выйти
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}