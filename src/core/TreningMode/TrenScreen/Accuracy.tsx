import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../../common/commonStyles';
import { localization } from '../../../modules/localization/localization';
import { getTextColorWithTheme } from '../../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../../modules/theme/ThemeContext';

interface IProps {
  procent: string,
  trueAsw: number,
  outputCurrency: string,
  lang: ILanguage
}

export function Accuracy({ procent, trueAsw, outputCurrency, lang }: IProps) {
  const { theme } = useContext(ThemeContext);
  const [formatAsw, setAsw] = useState((function() {
    const newArr: any = [];

    trueAsw.toString().split('').reverse().forEach((item, index) => {
      if (index == 3) newArr.push(' ');
      newArr.push(item);
    });

    return newArr.reverse().join('');
  })());

  return (
    <View style={commonStyles.trenModeAccuracyContainer}>
      <Text
        style={{
          color: getTextColorWithTheme(theme),
          ...commonStyles.trenModeAccuracyText
        }}
      >
        {`${localization.treningMode.trueAsw[lang]}:  ${formatAsw} ${outputCurrency}`}
      </Text>
      
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <Text 
          style={{
            color: getTextColorWithTheme(theme),
            ...commonStyles.trenModeAccuracyText
          }}
        >
          {`${localization.treningMode.accuracy[lang]}: `}

        </Text>
        <Text 
          style={{ 
            color: +procent > 80 ? 'green' : (+procent > 50 ? 'orange' : 'red'),
            ...commonStyles.trenModeAccuracyText
          }}
        >
          {procent}%
        </Text>
      </View>
    </View>
  );
}