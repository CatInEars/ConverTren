import { useNavigation } from '@react-navigation/core';
import React, { Dispatch, useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../../common/commonStyles';
import { localization } from '../../../modules/localization/localization';
import { getStatsColor } from '../../../modules/other/getStatsColor';
import { getTextColorWithTheme } from '../../../modules/theme/getTextColorWithTheme';
import { ThemeContext } from '../../../modules/theme/ThemeContext';
import { ExitButton } from './ExitButton';
import { RestartButton } from './RestartButton';

interface IProps {
  procentArr: number[],
  sendProcent: (procent: number) => void,
  timeIsOut: boolean,
  setPage: (pageNum: number) => void,
  setTimeIsOut: (value: boolean) => void,
  lang: ILanguage
}

function endScreen({ 
  procentArr, 
  sendProcent, 
  timeIsOut, 
  setPage,
  setTimeIsOut,
  lang
}: IProps) {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();
  const [average, _] = useState((function() {
    let res = 0;
    procentArr.forEach(item => {
      res += item;
    });
    res /= !!procentArr.length ? procentArr.length : 1;
    return +res.toFixed(1)
  })());

  useEffect(() => {
    sendProcent(average);
    navigation.removeListener('beforeRemove', () => {});
  }, []);

  return (
    <View
      style={{...commonStyles._center, width: '100%'}}
    >
      <Text
        style={{
          ...commonStyles.endScreenTitle,
          color: getTextColorWithTheme(theme)
        }}
      >
        {
          timeIsOut ? 
            localization.treningMode.endTitleTime[lang]
          : 
            localization.treningMode.endTitleNormal[lang]
        }
      </Text>
      
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <Text
          style={{
            ...commonStyles.endScreenAverage,
            color: getTextColorWithTheme(theme)
          }}
        >
          {`${localization.treningMode.average[lang]}: `}
        </Text>
        <Text
          style={{
            ...commonStyles.endScreenAverage,
            color: getStatsColor(average)
          }}
        >
          {average}%
        </Text>
      </View>

      <View
        style={[commonStyles.endScreenButtonsContainer, {
        }]}
      >
        <RestartButton 
          setPage={setPage} 
          setTimeIsOut={setTimeIsOut}
          lang={lang}
        />
        <ExitButton 
          lang={lang}
        />
      </View>

      <View style={commonStyles.easterEggContainer}>
        <Text style={commonStyles.easterEggText}>
          Hello from CatInEars
        </Text>
      </View>
    </View>
  );
}

export const EndScreen = connect(
  (state: IState) => ({
    lang: state.localization
  }),
  (dispatch: Dispatch<ISendProcent>) => ({
    sendProcent: (procent: number) => {
      dispatch({type: 'SEND_PROCENT', procent})
    }
  })
)(endScreen)