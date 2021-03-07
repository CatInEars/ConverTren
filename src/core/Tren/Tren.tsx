import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { Quote } from './Quote';
import { StartButton } from './StartButton';

interface IProps {
  lang: ILanguage
}

function tren({ lang }: IProps) {
  const [ modalVisibly, setModalVisibly ] = useState(false);

  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CurrencySelectModal');
  }

  return (
    <View 
      style={{
        ...commonStyles.trenScreenContainer,
        backgroundColor: getBGCWithTheme(theme)
      }}
    >
      <View>
        <Text 
          style={{
            ...commonStyles.trenLogoText,
            color: getTextColorWithTheme(theme)
          }}
        >
          ConverTren
        </Text>
      </View>

      <Button
        title="Open modal"
        onPress={handlePress}
      />
      
      <View style={commonStyles.trenStatsTextContainer}>
        <Text
          style={{
            color: getTextColorWithTheme(theme),
            ...commonStyles.trenStatsText
          }}
        >
          {localization.TrenScreen.lastAttempt[lang]}: --
        </Text>

        <Text
          style={{
            color: getTextColorWithTheme(theme),
            ...commonStyles.trenStatsText
          }}
        >
          {localization.TrenScreen.bestAttempt[lang]}: --
        </Text>
      </View>

      <StartButton lang={lang} /> 

      <Quote lang={lang} />
    </View>
  );
}

export const Tren = connect(
  (state: IState) => ({
    lang: state.localization
  })
)(tren);