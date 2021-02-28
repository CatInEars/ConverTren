import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';

export function StartButton() {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('TreningMode');
  }

  return (
    <TouchableHighlight
        onPress={handlePress}
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