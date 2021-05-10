import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, View, TouchableHighlight } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';

export function ExitButton() {
  const { navigate } = useNavigation();

  return (
    <TouchableHighlight 
      onPress={() => navigate('MainApp')}
    >
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
      }}>
        <Text style={commonStyles.endScreenButtonText}>
          Выйти
        </Text>
      </View>
    </TouchableHighlight>
  );
}