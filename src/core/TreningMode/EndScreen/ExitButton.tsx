import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, View, TouchableHighlight } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { localization } from '../../../modules/localization/localization';


interface IProps {
  lang: ILanguage
}

export function ExitButton({
  lang
}: IProps) {
  const { navigate } = useNavigation();

  return (
    <TouchableHighlight 
      onPress={() => navigate('MainApp')}
      activeOpacity={1}
      underlayColor='transparent'
      style={{width: '100%'}}
    >
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
      }}>
        <Text style={commonStyles.endScreenButtonText}>
          {localization.treningMode.exit[lang]}
        </Text>
      </View>
    </TouchableHighlight>
  );
}