import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';

interface IProps {
  lang: ILanguage
}

export function StartButton({ lang }: IProps) {

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
          {localization.TrenScreen.startButton[lang]}
        </Text>
      </View>
    </TouchableHighlight>
  );
}