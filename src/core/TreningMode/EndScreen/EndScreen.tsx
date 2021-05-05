import { useNavigation } from '@react-navigation/core';
import React, { Dispatch, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { commonStyles } from '../../../common/commonStyles';
import { ExitButton } from './ExitButton';
import { RestartButton } from './RestartButton';

interface IProps {
  procentArr: number[],
  sendProcent: (procent: number) => void,
  timeIsOut: boolean,
  setPage: (pageNum: number) => void,
  setTimeIsOut: (value: boolean) => void
}

function endScreen({ 
  procentArr, 
  sendProcent, 
  timeIsOut, 
  setPage,
  setTimeIsOut
}: IProps) {

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
      style={commonStyles._center}
    >
      <Text>{timeIsOut ? 'TimeOut' : 'End'}</Text>
      <Text>{average}%</Text>

      <View
        style={[commonStyles.endScreenButtonsContainer, {
        }]}
      >
        <RestartButton 
          setPage={setPage} 
          setTimeIsOut={setTimeIsOut}
        />
        <ExitButton />
      </View>
    </View>
  );
}

export const EndScreen = connect(
  () => ({}),
  (dispatch: Dispatch<ISendProcent>) => ({
    sendProcent: (procent: number) => {
      dispatch({type: 'SEND_PROCENT', procent})
    }
  })
)(endScreen)