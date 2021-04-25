import { useNavigation } from '@react-navigation/core';
import React, { Dispatch, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

interface IProps {
  procentArr: number[],
  sendProcent: (procent: number) => void,
  timeIsOut: boolean,
  setPage: (pageNum: number) => void
}

function endScreen({ procentArr, sendProcent, timeIsOut, setPage}: IProps) {

  const navigation = useNavigation();
  const [average, setAverage] = useState((function() {
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
    <View>
      <Text>{timeIsOut ? 'TimeOut' : 'End'}</Text>
      <Text>{average}%</Text>
      <Button
        title="EXIT"
        onPress={() => navigation.navigate('MainApp')}
      />
      <Button 
        title="RESTART"
        onPress={() => setPage(0)}
      />
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