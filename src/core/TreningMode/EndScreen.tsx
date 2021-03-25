import { useNavigation } from '@react-navigation/core';
import React, { Dispatch, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

interface IProps {
  procentArr: number[],
  sendProcent: (procent: number) => void
}

function endScreen({
  procentArr,
  sendProcent
}: IProps) {
  const [average, setAverage] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    let res = 0;
    procentArr.forEach(item => {
      res += item;
    });
    res /= procentArr.length;
    sendProcent(average);
    setAverage(res);

    navigation.removeListener('beforeRemove', () => {});
  }, [])

  return (
    <View>
      <Text>End</Text>
      <Text>{Math.round(average)}</Text>
      <Button
        title="EXIT"
        onPress={() => navigation.navigate('MainApp')}
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