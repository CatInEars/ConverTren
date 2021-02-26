import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../common/commonStyles';
import { getBGCWithTheme } from '../../modules/theme/getBGCWithTheme';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';
import { Quote } from './Quote';
import { StartButton } from './StartButton';

function tren() {
  const { theme } = useContext(ThemeContext);

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
      
      <View style={commonStyles.trenStatsTextContainer}>
        <Text
          style={{
            color: getTextColorWithTheme(theme)
          }}
        >
          Последняя попытка: --
        </Text>

        <Text
          style={{
            color: getTextColorWithTheme(theme)
          }}
        >
          Лучшая попытка: --
        </Text>
      </View>

      <StartButton /> 

      <Quote />
    </View>
  );
}

export const Tren = connect()(tren);