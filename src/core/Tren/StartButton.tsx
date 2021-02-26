import React from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';

export function StartButton() {
  return (
    <TouchableHighlight
        onPress={() => {}}
        style={commonStyles.trenStartButtonContainer}
      >
        <View style={commonStyles.trenStartButton}>
          <Text style={commonStyles.trenStartButtonText}>
            Начать тренировку
          </Text>
        </View>
      </TouchableHighlight>
  );
}