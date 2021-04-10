import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { localization } from '../../modules/localization/localization';
import { getTextColorWithTheme } from '../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../modules/theme/ThemeContext';

interface IProps {
  statsAsw: number[],
  lang: ILanguage
}

export function AttemptStats({ statsAsw, lang }: IProps) {
  const [sorted, setSorted] = useState<number[]>([]);
  const [arrLen, setArrLen] = useState(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setSorted([...statsAsw].sort((a: number, b: number) => a - b));
    setArrLen(statsAsw.length);
  }, [statsAsw]);

  return (
    <View style={commonStyles.trenStatsTextContainer}>
        <Text
          style={{
            color: getTextColorWithTheme(theme),
            ...commonStyles.trenStatsText
          }}
        >
          {localization.TrenScreen.lastAttempt[lang]}:{' '}
          {arrLen === 0 ? '--' : 
          (statsAsw[arrLen - 1] < 5 ? '<5%' : `${statsAsw[arrLen - 1]}%`)
          }
        </Text>

        <Text
          style={{
            color: getTextColorWithTheme(theme),
            ...commonStyles.trenStatsText
          }}
        >
          {localization.TrenScreen.bestAttempt[lang]}:{' '}
          {arrLen === 0 ? '--' : 
          (sorted[arrLen - 1] < 5 ? '<5%' : `${sorted[arrLen - 1]}%`)
          }
        </Text>
      </View>
  );
}